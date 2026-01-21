import Database from 'better-sqlite3';
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";
import config from "dotenv";

config.config({ path: process.env.NODE_ENV === 'development' ? ".env.development" : ".env.production", });

const sqlite = new Database(process.env.DATABASE_URL);

export const db = drizzle(sqlite, {
    schema, logger: true
});