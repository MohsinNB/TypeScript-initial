// learning function
//normal function
// Arrow function

// NORMAL FUNC
function add(num1: number, num2: number): number {
  const addition = num1 + num2;
  return addition;
}

// arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

const poorUser = {
  Name: "Mohsin",
  Balance: 0,
  AddBalance(balance: number): string {
    return `My new balance is ${this.Balance + balance}`;
  },
};

// Define function in array map Methods

const Arr: number[] = [1, 2, 3, 4, 5];
const newArr: number[] = Arr.map((elem: number): number => elem * elem);
