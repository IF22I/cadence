# Cadence e2e tests

End-to-end tests for Cadence with Playwright and TypeScript.
API tests live in `tests/api/`; UI tests will follow in `tests/ui/`.

## Setup

```bash
cd e2e
npm ci
```

## Run

Start the backend on http://127.0.0.1:8000 (see `backend/DEVELOPMENT.md`), then:

```bash
npm test              # run all tests
npm run report        # open the HTML report of the last run
```

## Configuration

| Variable | Default | Meaning |
|---|---|---|
| `CADENCE_API_URL` | `http://127.0.0.1:8000` | Base URL of the backend under test |