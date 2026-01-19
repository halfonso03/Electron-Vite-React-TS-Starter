
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const UserTable = sqliteTable("users", {
    id: integer("id").primaryKey({ autoIncrement: true }),

    email: text("email").notNull(),
    name: text("name").notNull(),

    createdAt: integer("created_at", { mode: "timestamp" })
        .notNull()
        .default(new Date())
});

//  email: text("email").notNull().unique(),