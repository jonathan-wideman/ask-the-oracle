const randomInt = function(min: number, max: number): number {
  // FIXME: not properly rounded
  return Math.round(Math.random() * (max - min) + min);
}

const roll = function(sides: number): number {
  return randomInt(1, sides);
}

const Dice = {
  roll
}

export default Dice;