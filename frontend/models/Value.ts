export class Value {
  value: number;
  dieId: number;
  timesRolled: number;

  constructor(value: number, dieId: number) {
    this.value = value;
    this.dieId = dieId;
    this.timesRolled = 0;
  }
}