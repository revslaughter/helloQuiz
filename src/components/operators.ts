class operatorChoice {
  name: string;
  operChar: string;
  operFunction: (x: number, y: number) => number;
}

const ADDITION_SYMBOL = String.fromCharCode(0x0002b);
const SUBTRACTION_SYMBOL = String.fromCharCode(0x02212);
const MULTIPLICATION_SYMBOL = String.fromCharCode(0x000d7);
const DIVISION_SYMBOL = String.fromCharCode(0x000f7);

const ADDITION: operatorChoice = {
  name: "Addition",
  operChar: ADDITION_SYMBOL,
  operFunction: (x: number, y: number) => x + y
};
const SUBTRACTION = {
  name: "Subtraction",
  operChar: SUBTRACTION_SYMBOL,
  operFunction: (x: number, y: number) => x - y
};
const MULTIPLICATION = {
  name: "Multiplication",
  operChar: MULTIPLICATION_SYMBOL,
  operFunction: (x: number, y: number) => x * y
};
const DIVISION = {
  name: "Division",
  operChar: DIVISION_SYMBOL,
  operFunction: (x: number, y: number) => x / y
};

let opersBySymbol: any = {};
opersBySymbol[ADDITION_SYMBOL] = ADDITION;
opersBySymbol[SUBTRACTION_SYMBOL] = SUBTRACTION;
opersBySymbol[MULTIPLICATION_SYMBOL] = MULTIPLICATION;
opersBySymbol[DIVISION_SYMBOL] = DIVISION;

const ALL_OPERATORS = {
  Addition: ADDITION,
  Subtraction: SUBTRACTION,
  Multiplication: MULTIPLICATION,
  Division: DIVISION,
  SymbolAccess: opersBySymbol,
  items: [ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION]
};

export default ALL_OPERATORS;
export {
  operatorChoice,
  ADDITION,
  SUBTRACTION,
  MULTIPLICATION,
  DIVISION,
  ALL_OPERATORS
};
