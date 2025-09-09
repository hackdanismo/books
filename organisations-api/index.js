// Import the Express framework from node_modules
import express from "express";

// Start a counter for organisation IDs, similar to auto-increment in a database
let _nextId = 1;
// Helper function to return the current date/time in ISO string format
const now = () => new Date().toISOString();

// Hard-coded data in-place of a database for initial testing of the API
const organisations = [
    { id: _nextId++, name: "Acme Fitness", slug: "acme-fitness", contactEmail: "team@acme.fit", createdAt: now(), updatedAt: now() },
    { id: _nextId++, name: "Bluebird Yoga", slug: "bluebird-yoga", contactEmail: "hello@bluebird.yoga", createdAt: now(), updatedAt: now() },
    { id: _nextId++, name: "Nimbus Climbing", slug: "nimbus-climbing", contactEmail: "hi@nimbus.climb", createdAt: now(), updatedAt: now() },
];

// Create an Express application
const app = express();
// Middleware: used to tell Express to automatically parse JSON request bodies
app.use(express.json());

// Endpoint: Check the health of the service and return a JSON object to test the server is running
app.get("/health", (_req, res) => {
    res.json({ ok: true, service: "organisation-api", timestamp: now() });
});

// CRUD routes here

// Set the port, default is 4000, if no environment variable is provided
const PORT = process.env.PORT || 4000;
// Start the Express server, listens on selected port
app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));