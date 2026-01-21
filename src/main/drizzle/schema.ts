
import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";


export const AssigneeTable = sqliteTable("Assignee", {

    id: integer("id").primaryKey(),

    locationName: text("locationName"),

    firstName: text("firstName"),

    lastName: text("lastName"),

    email: text("email"),

    extension: text("extension"),

    type: integer("type").notNull(),

    created_at: text().default(sql`(CURRENT_TIMESTAMP)`),
});

export const InitiativeTable = sqliteTable("Initiative", {

    id: integer("id").primaryKey(),

    name: text("name").notNull(),

    created_at: text().default(sql`(CURRENT_TIMESTAMP)`),
});

