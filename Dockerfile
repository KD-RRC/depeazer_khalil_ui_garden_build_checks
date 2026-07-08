# ---- Stage 1: Build ----
FROM node:20-alpine AS build

WORKDIR /depeazer_khalil_ui_garden_build_checks

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .
RUN npm run build

# ---- Stage 2: Serve ----
FROM node:20-alpine

RUN npm install -g serve

WORKDIR /depeazer_khalil_ui_garden_build_checks

COPY --from=build /depeazer_khalil_ui_garden_build_checks/build ./build

EXPOSE 8018

CMD ["serve", "-s", "build", "-l", "8018"]