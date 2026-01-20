CREATE TABLE `Assignee` (
	`id` integer PRIMARY KEY NOT NULL,
	`locatioName` text,
	`firstName` text,
	`lastName` text,
	`email` text,
	`extension` text,
	`type` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `Initiative` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
