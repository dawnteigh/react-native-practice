import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';

export const dice = sqliteTable('dice', {
  id: integer('id').primaryKey(),
  description: text('description'),
  dieType: text('die_type'),
  image: text('image'),
  numOfValues: integer('num_of_values'),
  totalRolls: integer('total_rolls').default(0),
  averageRoll: real('average_roll').default(0.0)
});

export const diceRelations = relations(dice, ({ many }) => ({
  values: many(values),
}));

export const values = sqliteTable('values', {
  id: integer('id').primaryKey(),
  value: integer('value'),
  dieId: integer('die_id').references(() => dice.id),
  timesRolled: integer('times_rolled').default(0)
});

export const valuesRelations = relations(values, ({ one }) => ({
  die: one(dice, {
    fields: [values.dieId],
    references: [dice.id],
  }),
}));