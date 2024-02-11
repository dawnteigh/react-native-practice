CREATE TABLE `dice` (
	`id` integer PRIMARY KEY NOT NULL,
	`description` text,
	`dieType` text,
	`image` text,
	`numOfValues` integer,
	`totalRolls` integer DEFAULT 0,
	`averageRoll` real DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `values` (
	`id` integer PRIMARY KEY NOT NULL,
	`value` integer,
	`dieId` integer,
	`timesRolled` integer DEFAULT 0,
	FOREIGN KEY (`dieId`) REFERENCES `dice`(`id`) ON UPDATE no action ON DELETE no action
);
