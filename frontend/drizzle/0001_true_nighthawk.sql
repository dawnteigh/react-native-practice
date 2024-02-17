ALTER TABLE `dice` RENAME COLUMN `dieType` TO `die_type`;--> statement-breakpoint
ALTER TABLE `dice` RENAME COLUMN `numOfValues` TO `num_of_values`;--> statement-breakpoint
ALTER TABLE `dice` RENAME COLUMN `totalRolls` TO `total_rolls`;--> statement-breakpoint
ALTER TABLE `dice` RENAME COLUMN `averageRoll` TO `average_roll`;--> statement-breakpoint
ALTER TABLE `values` RENAME COLUMN `dieId` TO `die_id`;--> statement-breakpoint
ALTER TABLE `values` RENAME COLUMN `timesRolled` TO `times_rolled`;--> statement-breakpoint
/*
 SQLite does not support "Dropping foreign key" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html

 Due to that we don't generate migration automatically and it has to be done manually
*/--> statement-breakpoint
/*
 SQLite does not support "Creating foreign key on existing column" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html

 Due to that we don't generate migration automatically and it has to be done manually
*/