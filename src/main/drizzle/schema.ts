
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const UserTable = sqliteTable("users", {
    id: integer("id").primaryKey({ autoIncrement: true }),

    email: text("email").notNull(),

    name: text("name").notNull(),

    createdAt: integer("created_at", { mode: "timestamp" })
        .notNull()
        .default(new Date())
});



export const AssigneeTable = sqliteTable("Assignee", {
    id: integer("id").primaryKey(),

    locatioName: text("locatioName"),

    firstName: text("firstName"),

    lastName: text("lastName"),

    email: text("email"),

    extension: text("extension"),

    type: integer("type").notNull(),

})



