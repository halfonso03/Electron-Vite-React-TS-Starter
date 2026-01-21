PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_Assignee` (
	`id` integer PRIMARY KEY NOT NULL,
	`locationName` text,
	`firstName` text,
	`lastName` text,
	`email` text,
	`extension` text,
	`type` integer NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
INSERT INTO `__new_Assignee`("id", "locationName", "firstName", "lastName", "email", "extension", "type", "created_at") SELECT "id", "locationName", "firstName", "lastName", "email", "extension", "type", "created_at" FROM `Assignee`;--> statement-breakpoint
DROP TABLE `Assignee`;--> statement-breakpoint
ALTER TABLE `__new_Assignee` RENAME TO `Assignee`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_Initiative` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
INSERT INTO `__new_Initiative`("id", "name", "created_at") SELECT "id", "name", "created_at" FROM `Initiative`;--> statement-breakpoint
DROP TABLE `Initiative`;--> statement-breakpoint
ALTER TABLE `__new_Initiative` RENAME TO `Initiative`;