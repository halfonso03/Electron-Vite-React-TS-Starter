PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_Item` (
	`id` integer PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`hbcNumber` text NOT NULL,
	`computerName` text NOT NULL,
	`serialNumber` text NOT NULL,
	`cubicle_Room` text NOT NULL,
	`ipAddress` text NOT NULL,
	`macAddress` text NOT NULL,
	`cabinetOrRack` text NOT NULL,
	`itemTypeId` integer NOT NULL,
	`initiativeId` integer,
	`assignedToId` integer,
	`itemStatusId` integer NOT NULL,
	`disposalDate` text,
	`assignedDate` text,
	FOREIGN KEY (`initiativeId`) REFERENCES `Initiative`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`assignedToId`) REFERENCES `Assignee`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_Item`("id", "description", "created_at", "hbcNumber", "computerName", "serialNumber", "cubicle_Room", "ipAddress", "macAddress", "cabinetOrRack", "itemTypeId", "initiativeId", "assignedToId", "itemStatusId", "disposalDate", "assignedDate") SELECT "id", "description", "created_at", "hbcNumber", "computerName", "serialNumber", "cubicle_Room", "ipAddress", "macAddress", "cabinetOrRack", "itemTypeId", "initiativeId", "assignedToId", "itemStatusId", "disposalDate", "assignedDate" FROM `Item`;--> statement-breakpoint
DROP TABLE `Item`;--> statement-breakpoint
ALTER TABLE `__new_Item` RENAME TO `Item`;--> statement-breakpoint
PRAGMA foreign_keys=ON;