CREATE TABLE `Item` (
	`id` integer PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
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
	`itemStatusId` integer NOT NULL
);
