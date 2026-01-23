import { defineConfig } from "drizzle-kit";
import config from "dotenv";

// const isDev = process.env.NODE_ENV === 'development';

config.config({ path: ".env.development" });

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