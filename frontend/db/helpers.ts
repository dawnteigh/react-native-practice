import { Die } from "../models/Die";
import { dice, values } from "./schema";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite/next";
import * as schema from "./schema";
import { Value } from "../models/Value";

const expoDb = openDatabaseSync("dg.db");
const db = drizzle(expoDb, { schema });

export const createDieWithValues = async (die: Die) => {
  const newDie = await db.insert(dice).values(die).returning()[0];
  let newValues = [];
  if (newDie.dieType === 'd%') {
    let i = 0;
    while (i < 100) {
      newValues.push({ value: i, dieId: newDie.id });
      i += 10;
    }
  }
  if (newDie.dieType === "2d6") {
    let i = 2;
    while (i <= 12) {
      newValues.push({ value: i, dieId: newDie.id });
      i++;
    }
  }
  else {
    let i = 1;
    while (i <= newDie.numOfValues) {
      newValues.push({ value: i, dieId: newDie.id });
      i++;
    }
  }
  await db.insert(values).values(newValues)
}

