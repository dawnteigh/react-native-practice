import { Value } from "./Value";

export class Die {
  description: string;
  dieType: string;
  image: string;
  numOfValues: number;
  totalRolls: number;
  averageRoll: number;
  values: Value[];

  constructor(description: string, dieType: string, image: string, numOfValues: number) {
    this.description = description;
    this.dieType = dieType;
    this.image = image;
    this.numOfValues = numOfValues;
    this.totalRolls = 0;
    this.averageRoll = 0;
    // create value objects for the type of die
  }
}