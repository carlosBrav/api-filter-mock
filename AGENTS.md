# api-filter-mock

A minimal Express mock API (`filter-api`) that exposes game-filter options. The whole app lives in `index.js`.

## Cursor Cloud specific instructions

- This is a single backend Node.js/Express service, no UI, no database. Dependencies are installed by the update script (`npm install`).
- Run the dev server with `npm run dev` (uses `node --watch index.js` for hot reload). `npm start` runs it without watch.
- Server listens on `http://localhost:3000` by default (override with the `PORT` env var).
- The only real endpoint is `POST /api/v1/filters`. It accepts an optional JSON body with array fields (`attractions`, `type_jackpots`, `providers`, `themes`, `payment_systems`, `volatilities`) and returns filter options whose `enabled` flags depend on the inputs. Quick check:
  `curl -s -X POST http://localhost:3000/api/v1/filters -H "Content-Type: application/json" -d '{}'`
- There is no lint setup and no real test suite — the `test` script in `package.json` is the npm default that intentionally exits 1. Don't treat that as a real failure.
- CORS is restricted to a whitelist in `index.js`; non-whitelisted browser origins will be blocked, but direct curl/server-to-server requests are unaffected.
