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
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`name` text NOT NULL,
	`created_at` integer DEFAULT '"2026-01-20T15:51:49.267Z"' NOT NULL
);
