import { defineConfig } from "drizzle-kit";

// Load .env files, usually .env.local for local development


export default defineConfig({
    dialect: 'sqlite',
    schema: "src/main/drizzle/schema.ts",
    out: 'src/main/drizzle/migrations',
    // driver: "durable-sqlite",
    dbCredentials: {
        url: process.env.DATABASE_URL as string
    },
    verbose: true,
    strict: true,
})