// Function Type with Optional Parameter
type FuncType = (n: number, m: number, l?: number) => number; // Type alias representing a function with optional parameter

const func: FuncType = (n, m, l) => {
  if (typeof l === "undefined") return n * m;
  return n * m * l;
};

// Example usage with optional parameter:
const result1 = func(25, 23); // When 'l' is omitted, it defaults to undefined
const result2 = func(25, 23, 3); // Providing all parameters

// Default Parameter Inside Function
const func2 = (n: number, m: number, l: number = 20): number => {
  return n * m * l;
};

// Example usage with default parameter:
const result3 = func2(25, 23); // Using the default 'l' value (20)
const result4 = func2(25, 23, 4); // Providing a custom 'l' value

// Rest Parameter (Collecting Variable Number of Arguments)
type FuncType2 = (...m: number[]) => number[]; // Function type with variable number of arguments and returning an array of numbers

const func4: FuncType2 = (...m) => {
  return m; // Returns an array of numbers
};

// Example usage with rest parameter:
const result5 = func4(25, 26); // Result is an array: [25, 26]

// Using the 'function' Keyword (with or without Type Alias)
const func5: FuncType2 = function func5(...n) {
  return n; // Returns an array of numbers
};

// Example usage with the 'function' keyword:
const result6 = func5(25, 26);

// Standard Function Declaration
function func6(n: number): number {
  return n; // Simple function declaration
}
