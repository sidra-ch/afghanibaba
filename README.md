# afghanibaba

Monorepo with a Next.js frontend and an Express + MongoDB backend.

## Structure

- frontend/ -> Next.js app
- backend/ -> Express REST API

## Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

## Backend (Express + MongoDB)

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

API health check:

```bash
curl http://localhost:4000/api/health
```

## API Endpoints

- GET /api/home
- GET /api/flights
- GET /api/buses
- GET /api/hotels
- GET /api/residences
- GET /api/tours
- GET /api/insurance

All resources support basic CRUD at:

- GET /api/<resource>
- GET /api/<resource>/:id
- POST /api/<resource>
- PUT /api/<resource>/:id
- DELETE /api/<resource>/:id
