CREATE TABLE `Assignee` (
	`id` integer PRIMARY KEY NOT NULL,
	`locationName` text,
	`firstName` text,
	`lastName` text,
	`email` text,
	`extension` text,
	`assigneeTypeId` integer NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
CREATE TABLE `Initiative` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
CREATE TABLE `Item` (
	`id` integer PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`hbcNumber` text NOT NULL,
	`computerName` text,
	`serialNumber` text,
	`cubicle_Room` text,
	`ipAddress` text,
	`macAddress` text,
	`cabinetOrRack` text,
	`itemTypeId` integer NOT NULL,
	`initiativeId` integer,
	`assignedToId` integer,
	`itemStatusId` integer NOT NULL,
	`disposalDate` text,
	`assignedDate` text,
	`kbmsId` text,
	`vendorId` text,
	`driverType` text,
	`sharedName` text,
	FOREIGN KEY (`initiativeId`) REFERENCES `Initiative`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`assignedToId`) REFERENCES `Assignee`(`id`) ON UPDATE no action ON DELETE no action
);
