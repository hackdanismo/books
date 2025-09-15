# Books

## Setup Next.js
The frontend of the application uses `Next.js` as the framework and is found inside the `frontend` directory.

```shell
$ npx create-next-app@latest
```

### Install packages
Install the `npm` packages:

```shell
$ cd frontend
$ npm install
```

### Run the development server
To run the development server for the frontend:

```shell
$ cd frontend
$ npm run dev
```

This will open the application in the browser: `http://localhost:3000`.

## Organisations API
The `organisations-api` is the API microservice that manages adding, deleting, editing and general updates to the organisations in the database. This is created using `ExpressJS`.

We use `Prisma` as an `ORM (Object–Relational Mapping)` tool to connect to the database that stores the data for the organisations/companies.

### Run the API
To run the API:

```shell
$ cd organisations-api
$ npm run dev
```

This will run the API at: `http://localhost:4000/`.

To check the health of the API service and the server is running, use this endpoint: `http://localhost:4000/health`.

### Database (local)
The current database used during development is `SQLite`. This can be installed using `Homebrew`. To check that this is installed on macOS:

```shell
$ sqlite3 --version
```

To setup `Prisma`, if not already setup, start by adding an `.env` file to the `organisations-api` folder with the following:

```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="file:./dev.db"
```

Then run these commands in the terminal:

```shell
$ cd organisations-api

# This will create a prisma/ folder in the project and a .env file with a default SQLite connection string
$ npx prisma init --datasource-provider sqlite
# Create the database and generate the client. Creates the prisma/dev.db file and applies the schema
$ npx prisma migrate dev --name init
```