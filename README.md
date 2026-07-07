# Depeazer Khalil UI Garden

A React + TypeScript UI component library built with Storybook, styled with `styled-components`, and tested with Jest and React Testing Library.

## What's included

This library contains the following components, each with its own folder under `src/components/`:

- Button
- Label
- Text
- Img
- Card
- Dropdown
- RadioButton
- HeroImage
- Table (composed of TableHeader, TableRow, TableCell, and TableFooter)

Each component folder contains:
- `ComponentName.tsx` – the component itself
- `ComponentName.types.tsx` – the TypeScript props interface
- `ComponentName.stories.tsx` – the Storybook story with interactive Controls
- `ComponentName.test.tsx` – automated tests (visibility + disabled-state style check)
- `index.ts` – re-export file

All components support a `disabled` state (visually muted, non-interactive) and are responsive down to mobile screen widths.

## Running the project locally (without Docker)

1. Install dependencies:
   ```
   npm install
   ```

2. Run the demo app (shows every component on one page):
   ```
   npm start
   ```
   Opens at `http://localhost:3000`.

3. Run Storybook (interactive component catalog with Controls):
   ```
   npm run storybook
   ```
   Opens at `http://localhost:6006`.

4. Run the automated test suite:
   ```
   npm test
   ```

## Running the project with Docker (production build on port 8083)

The Dockerfile builds a production version of the app and serves it on port **8083**.

1. Build the Docker image:
   ```
   docker build -t depeazer_khalil_coding_assignment12 .
   ```

2. Run the container:
   ```
   docker run -p 8083:8083 --name depeazer_khalil_coding_assignment12 depeazer_khalil_coding_assignment12
   ```

3. Open a browser to:
   ```
   http://127.0.0.1:8083
   ```
   or
   ```
   http://localhost:8083
   ```

4. To stop the container:
   ```
   docker stop depeazer_khalil_coding_assignment12
   ```

### How the Dockerfile works

The Dockerfile uses a two-stage build:

- **Stage 1 (build):** uses a Node.js image to install dependencies and run `npm run build`, which produces an optimized, minified production build of the React app.
- **Stage 2 (serve):** copies only the finished build output from Stage 1 into a clean image, installs a lightweight static file server (`serve`), and serves the app on port 8083. This keeps the final image small, since it doesn't carry over `node_modules`, source files, or build tools.

### A note on local Docker testing

Docker Desktop could not be installed on the development machine used for this project, since it is an ARM64-based Windows PC. Docker Desktop's installer fails on this architecture due to a known issue enabling the `VirtualMachinePlatform` Windows feature on ARM64 systems (the installer attempts to enable it via a DISM flag that doesn't exist on ARM64 builds of Windows, even with WSL2 already installed and working). This is a documented platform limitation, not an issue with the project itself.

To compensate, every part of this Dockerfile was manually validated using the equivalent local commands before being placed in the Dockerfile:
- `npm run build` was run locally and confirmed to complete successfully and produce a working `build/` folder.
- `serve -s build -l 8083` was run locally and confirmed to correctly serve the production build at `http://localhost:8083`.

This confirms the logic inside both Docker stages is correct, even though the Dockerfile itself could not be built/run in a container on this machine.

## Project structure

```
src/
  components/
    Button/
    Label/
    Text/
    Img/
    Card/
    Dropdown/
    RadioButton/
    HeroImage/
    TableCell/
    TableRow/
    TableHeader/
    TableFooter/
    Table/
  App.tsx          (demo page showcasing all components)
  App.test.tsx
.storybook/         (Storybook configuration)
Dockerfile
README.md
```