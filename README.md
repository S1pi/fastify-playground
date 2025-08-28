# fastify-testing

Minimal Fastify + TypeScript playground with a couple of example routes and sensible defaults for linting and formatting.

## Overview
- Fastify v5 with TypeScript and ESM (`type: module`)
- Pretty logging via `pino-pretty`
- Example routes: health check and echo
- Dev workflow with `tsx` (no build step needed)

## Quick Start
1. Install dependencies:
   - `npm install`
2. Configure environment:
   - Copy `.env.sample` to `.env` and adjust values as needed.
3. Run in development:
   - `npm run dev`
4. Or run directly (no watch):
   - `npm start`

Server listens on `PORT` (default `3000`). Example: http://localhost:3000

## Scripts
- `dev`: Run with `tsx` in watch mode (`tsx watch src/index.ts`).
- `start`: Run once with Node + `tsx` loader.
- `lint`: Lint with ESLint.
- `format`: Format with Prettier.
- `format-check`: Check formatting with Prettier.
- `test`: Placeholder.

## Environment
- `PORT`: Port for the HTTP server (default `3000`).

Copy `.env.sample` to `.env` to get started.

## API Endpoints
Base URL: `/api`

- GET `/api/health`
  - Returns service status and timestamp.
  - 200 response: `{ "status": "ok", "timestamp": "ISO-8601" }`

- GET `/api/echo`
  - Query: `q` (optional string)
  - 200 response: `{ "query": string | null }`
  - Example: `curl "http://localhost:3000/api/echo?q=hello"`

- POST `/api/echo`
  - Body: `{ "msg": string }`
  - 200 response: `{ "echoed": string }`
  - Example:
    ```bash
    curl -X POST http://localhost:3000/api/echo \
      -H 'Content-Type: application/json' \
      -d '{"msg":"hello"}'
    ```

## Project Structure
```
src/
  index.ts            # Fastify app bootstrap, plugins, and route registration
  routes/
    health.ts         # GET /api/health
    echo.ts           # GET/POST /api/echo
  plugins/
    cors.ts           # (placeholder)
    sensible.ts       # (placeholder)
```

## Requirements
- Node.js 18+ (LTS recommended)

## Notes
- CORS is enabled with `@fastify/cors` (origin: `true`).
- `@fastify/sensible` is registered for helpful utilities.

## License
ISC (see `package.json`).
