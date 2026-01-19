import { defineConfig } from "drizzle-kit";



export default defineConfig({
    dialect: 'sqlite',
    schema: "src/main/drizzle",
    out: 'src/main/drizzle/migrations',
    // driver: "durable-sqlite",
    dbCredentials: {
        url: process.env.DATABASE_URL as string
    },
    verbose: true,
    strict: true
})