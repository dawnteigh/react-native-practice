import { Value } from "./Value";

export class Die {
  description: string;
  dieType: string;
  image: string;
  numOfValues: number;
  totalRolls: number;
  averageRoll: number;
  values: Value[];

  constructor(description: string, dieType: string, image: string) {
    this.description = description;
    this.dieType = dieType;
    this.image = image;
    this.numOfValues = this.findNumOfValues(dieType);
    this.totalRolls = 0;
    this.averageRoll = 0;
    // create value objects for the type of die
  }

  findNumOfValues(type: string): number {
    if (type === 'd%') return 10;
    if (type === '2d6') return 11;
    else return parseInt(type)
  }

  createValues(type: string): void {

  }
}