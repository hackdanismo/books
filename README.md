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

## Organisation API
The `organisation-api` is the API microservice that manages adding, deleting, editing and general updates to the organisations in the database. This is created using `ExpressJS`.

### Run the API
To run the API:

```shell
$ npm run dev
```

This will run the API at: `http://localhost:4000/`.

To check the health of the API servuce: `http://localhost:4000/health`.