
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";


export const AssigneeTable = sqliteTable("Assignee", {

    id: integer("id").primaryKey(),

    locatioName: text("locatioName"),

    firstName: text("firstName"),

    lastName: text("lastName"),

    email: text("email"),

    extension: text("extension"),

    type: integer("type").notNull(),
});

export const InitiativeTable = sqliteTable("Initiative", {

    id: integer("id").primaryKey(),

    name: text("name").notNull(),
});

