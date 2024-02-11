import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';
export const dice = sqliteTable('dice', {
  id: integer('id').primaryKey(),
  description: text('description'),
  dieType: text('dieType'),
  image: text('image'),
  numOfValues: integer('numOfValues'),
  totalRolls: integer('totalRolls').default(0),
  averageRoll: real('averageRoll').default(0.0)
});
export const values = sqliteTable('values', {
  id: integer('id').primaryKey(),
  value: integer('value'),
  dieId: integer('dieId').references(() => dice.id),
  timesRolled: integer('timesRolled').default(0)
})