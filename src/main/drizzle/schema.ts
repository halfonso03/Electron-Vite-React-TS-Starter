
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

    computerName: text("computerName"),

    serialNumber: text("serialNumber"),

    cubicle_Room: text("cubicle_Room"),

    ipAddress: text("ipAddress"),

    macAddress: text("macAddress"),

    cabinetOrRack: text("cabinetOrRack"),

    itemTypeId: integer("itemTypeId").notNull(),

    initiativeId: integer("initiativeId").references(() => InitiativeTable.id),

    assignedToId: integer("assignedToId").references(() => AssigneeTable.id),

    itemStatusId: integer("itemStatusId").notNull(),

    disposalDate: text("disposalDate"),

    assignedDate: text("assignedDate"),

    kbmsId: text("kbmsId"),

    vendorId: text("vendorId"),

    driverType: text("driverType"),

    sharedName: text("sharedName"),
});

