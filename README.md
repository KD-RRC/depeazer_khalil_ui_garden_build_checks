# Depeazer Khalil UI Garden - Build Checks

A React + TypeScript UI component library with automated code quality enforcement
via Prettier, ESLint, Husky pre-commit hooks, and GitHub Actions CI/CD.

## What's new in Assignment 13

- **Prettier** — enforces consistent code formatting across all source files
- **ESLint** — enforces code quality rules for TypeScript and React
- **Husky** — runs pre-commit hooks that block commits if Prettier, ESLint, or tests fail
- **GitHub Actions** — CI pipeline that runs the same checks on every push to GitHub

## Tool Overview

| Tool | Purpose |
--------------------

| Prettier | Checks consistent code formatting |
| ESLint | Detects code quality and rule violations |
| Tests | Verify component rendering and behaviour |
| Husky | Runs quality checks before a local commit |
| GitHub Actions | Repeats checks on pushes and pull requests |
| Docker | Builds and serves the production app consistently |

## Pre-commit hook behaviour

Every `git commit` automatically runs:
1. `npm run format:check` — verifies all files match Prettier formatting rules
2. `npm run lint` — runs ESLint across all TypeScript/TSX files
3. `npm test -- --watchAll=false` — runs the full Jest test suite

If any step fails, the commit is blocked and you must fix the issue first.
To bypass (not recommended): `git commit --no-verify`

## Running locally

Install dependencies: