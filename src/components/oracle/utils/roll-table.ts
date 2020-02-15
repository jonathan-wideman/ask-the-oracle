import { IOracle } from "../../../store/Store";
import Dice from "../../../modules/dice/dice";

const roll = function (oracle: IOracle): number {
  // FIXME: use oracle range
  return Dice.roll(oracleMax(oracle));
}

const rollResult = function (oracle: IOracle): string {
  const value = roll(oracle);
  return oracle.table.find((item) => checkRange(value, item.roll))?.result ?? 'NOPE';
}

const checkRange = function (roll: number, range: string): boolean {
  const min = rangeMin(range);
  const max = rangeMax(range);
  // console.log('checkRange:', min, '<=', roll, '<=', max);
  return min <= roll && roll <= max;
  // return range.includes(roll);
}

const rangeMin = function (range: string): number {
  const regex = /^[0-9]+/;
  const match = range.match(regex)?.pop()
  if (match === undefined) {
    throw new Error('no minimum in range ' + range);
  }
  return parseInt(match);
}

const rangeMax = function (range: string): number {
  const regex = /[0-9]+$/;
  const match = range.match(regex)?.pop()
  if (match === undefined) {
    throw new Error('no minimum in range ' + range);
  }
  if (match === '00') {
    return 100;
  }
  return parseInt(match);
}

const oracleMax = function (oracle: IOracle): number { // { min: number, max: number } {
  const max = rangeMax(oracle.table[oracle.table.length - 1].roll)
  // console.log('oracleMax:', max);
  return max;
  // return {
  //   min: rangeMin(oracle.table[0].roll),
  //   max: rangeMax(oracle.table[oracle.table.length - 1].roll),
  // }
}

const RollTableUtils = {
  rollResult
}

export default RollTableUtils