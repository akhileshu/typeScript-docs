// Implicitly Typed Variable
let a = 45; // TypeScript infers 'a' as type number
// a = "Cannot assign a string to 'a'; it's implicitly a number.";

// Explicit Type Definition
let num: number = 90;
let title: string = "The Golden City";

// Union Type
let strOrNum: string | number;
strOrNum = "string"; // 'strOrNum' can be either a string or a number
strOrNum = 99;

// Function Returns Void or Any Type
const func = (n: string, m: string): void => {
  // This function doesn't return any value
};

const func2 = (n: string, m: string): number => {
  // This function must return a number
  return 78;
};

// Generic Types: Used when unsure of parameter type

// Type Alias Using Union
type UserName = string | number;
let guest: UserName = "string";
guest = 99;

// Function with Parameters 'n' and 'm' Returns a Number
type FunctionWithReturnType = (n: string, m: string) => number;
const func3: FunctionWithReturnType = (n, m) => {
  console.log(n, m);
  return 99;
};

// Arrays: Containing Only Numbers
const arr: number[] = [12, 21, 32, 43];
const arr2: string[] = ["12", "21", "32", "43"];

// Arrays: Using a Generic Type to Allow Both Numbers and Strings
const arr3: Array<string | number> = [12, 21, "32", "43"];

// Tuple: Fixed-Size Array
// Can Contain Only 2 Numbers
const arr4: [number, number] = [12, 21];
const arr5: [number, string] = [12, "21"];

// Objects

// Using Type Alias
type Obj = {
  height: number;
  weight: number;
  sport?: string; // Optional property
  gender: string;
};

const obj: Obj = {
  height: 8,
  weight: 80,
  gender: "male",
};

// Interfaces are Preferred for Objects and Support Inheritance
interface Obj2 {
  height: number;
  weight: number;
}

// Extending an Interface
type funcType = (n: number, m: number) => void;
interface Obj3 extends Obj2 {
  gender: string; // Adding an additional property
  func?: funcType;
}

const obj2: Obj3 = {
  height: 8,
  weight: 80,
  gender: "male",
  func: (n, m) => {
    console.log(n * m);
  },
};
// obj2.func()  //Cannot invoke an object which is possibly 'undefined' because of optional ?
