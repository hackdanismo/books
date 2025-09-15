// Import the Express framework from node_modules
import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Helper function to return the current date/time in ISO string format
const now = () => new Date().toISOString();

// Create an Express application
const app = express();
// Middleware: used to tell Express to automatically parse JSON request bodies
app.use(express.json());

// Endpoint: Check the health of the service and return a JSON object to test the server is running
app.get("/health", async (_req, res) => {
    try {
        // Simple database roundtrip to ensure connection is healthy
        await prisma.$queryRaw`SELECT 1`;
        res.json({ ok: true, service: "organisation-api", timestamp: now() });
    } catch (e) {
        res.status(500).json({ ok: false, error: "Database is not reachable", timestamp: now() });
    }
});

/**
 * GET /organisations
 * Returns all organisations from the database via Prisma
 */
app.get("/organisations", async (_req, res) => {
    try {
        const organisations = await prisma.organisation.findMany({
            orderBy: { id: "asc" },
        });
        res.json(organisations);
    } catch (err) {
        console.error("Failed to fetch organisations:", err);
        res.status(500).json({ error: "Failed to fetch organisations" });
    }
});

// Set the port, default is 4000, if no environment variable is provided
const PORT = process.env.PORT || 4000;

// Start the Express server, listens on selected port
app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));

// Graceful shutdown: close the Prisma connection
process.on("SIGINT", async () => {
    await prisma.$disconnect();
    process.exit(0);
});
process.on("SIGTERM", async () => {
    await prisma.$disconnect();
    process.exit(0);
});