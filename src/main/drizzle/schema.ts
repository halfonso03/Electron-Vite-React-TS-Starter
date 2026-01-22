
import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";


export const AssigneeTable = sqliteTable("Assignee", {

    id: integer("id").primaryKey(),

    locationName: text("locationName"),

    firstName: text("firstName"),

    lastName: text("lastName"),

    email: text("email"),

    extension: text("extension"),

    assigneeTypeId: integer("assigneeTypeId").notNull(),

    created_at: text().default(sql`(CURRENT_TIMESTAMP)`),
});

export const InitiativeTable = sqliteTable("Initiative", {

    id: integer("id").primaryKey(),

    name: text("name").notNull(),

    created_at: text().default(sql`(CURRENT_TIMESTAMP)`),
});



export const ItemTable = sqliteTable("Item", {

    id: integer("id").primaryKey(),

    description: text("description").notNull(),

    created_at: text().default(sql`(CURRENT_TIMESTAMP)`).notNull(),

    hbcNumber: text("hbcNumber").notNull(),

    computerName: text("computerName").notNull(),

    serialNumber: text("serialNumber").notNull(),

    cubicle_Room: text("cubicle_Room").notNull(),

    ipAddress: text("ipAddress").notNull(),

    macAddress: text("macAddress").notNull(),

    cabinetOrRack: text("cabinetOrRack").notNull(),

    itemTypeId: integer("itemTypeId").notNull(),

    initiativeId: integer("initiativeId"),

    assignedToId: integer("assignedToId"),

    itemStatusId: integer("itemStatusId").notNull(),

    disposalDate: text("disposalDate"),

    assignedDate: text("assignedDate"),


});

