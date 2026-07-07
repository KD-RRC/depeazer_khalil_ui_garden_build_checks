# ---- Stage 1: Build the React app ----
FROM node:20-alpine AS build

# Set working directory inside the build stage
WORKDIR /depeazer_khalil_ui_garden

# Copy package files first (better Docker layer caching:
# dependencies only reinstall if package.json/package-lock.json change)
COPY package*.json ./
RUN npm install

# Copy the rest of the project source code
COPY . .

# Create the optimized production build (outputs to /build folder)
RUN npm run build

# ---- Stage 2: Serve the production build ----
FROM node:20-alpine

# Install "serve", a lightweight static file server
RUN npm install -g serve

# Set working directory for the site files, as required by the assignment
WORKDIR /depeazer_khalil_ui_garden

# Copy only the production build output from Stage 1
COPY --from=build /depeazer_khalil_ui_garden/build ./build

# Expose port 8083 so it can be mapped to the host machine
EXPOSE 8083

# Serve the build folder on port 8083
CMD ["serve", "-s", "build", "-l", "8083"]