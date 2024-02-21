import { Die } from "../models/Die";
import { dice, values } from "./schema";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite/next";
import * as schema from "./schema";

const expoDb = openDatabaseSync("dg.db");
const db = drizzle(expoDb, { schema });

export const createDieWithValues = async (die: Die) => {
  const newDie = await db.insert(dice).values(die).returning();
  // attempting to return the inserted object to access the id property and create Value objects, but it's not working
}