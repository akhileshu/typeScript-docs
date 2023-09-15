// Type utility - Use of access modifiers

// Example: Partial<Type> - Makes all properties of a type optional

type User = {
  name: string;
  email: string;
};

type User2 = Partial<User>; // User2 allows every property to be optional

// Example: Required<Type> - Opposite of Partial, makes all properties mandatory

type User3 = Required<User>; // User3 enforces every property to be mandatory

// Example: Readonly<Type> - Makes all properties of a type readonly

type User4 = Readonly<User>; // User4 enforces every property to be readonly

const user: User4 = {
  name: "abhi",
  email: "abhi@gmail.com",
};

// Example: Record<Keys, Type> - For creating a mapped type with key-value pairs of a specific structure.

type User5 = Record<"name" | "email" | "gender", string>;

// Use Case: Creating an object containing multiple users with information

// Create a Record type to map user IDs (keys) to their information (Type)
interface UserInfo {
  name: string;
  age: number;
  email: string;
}

type UserName = "john" | "levi" | "elon" | "jack";
type UserDatabase = Record<UserName, UserInfo>;

// Define user information
const users: UserDatabase = {
  john: {
    name: "john",
    age: 28,
    email: "john@example.com",
  },
  levi: {
    name: "levi",
    age: 32,
    email: "levi@example.com",
  },
  elon: {
    name: "elon",
    age: 24,
    email: "elon@example.com",
  },
  jack: {
    name: "jack",
    age: 28,
    email: "jack@example.com",
  },
};

// You can now access user information by their IDs
const leviInfo = users["levi"];
console.log(leviInfo.name); // Output: levi

// Example: Pick<Type, Keys> - Includes specified properties from a type

interface OrderType {
  readonly id: string;
  name: string;
  price: number;
  country: string;
}

type IdAndName = Pick<OrderType, "id" | "name">;

// Example: Omit<Type, Keys> - Excludes specified properties from a type

type PriceAndCountry = Omit<OrderType, "id" | "name">;

// Example: Exclude<Type, ExcludedUnion> - Excludes types from a union

type MyUnion = string | number | boolean | null;

type Random = Exclude<MyUnion, boolean>; // Excludes boolean from the union

// Example: Extract<Type, Union> - Extracts types from a union

type Random2 = Extract<MyUnion, boolean>; // Extracts boolean from the union

// Example: NonNullable<Type> - Excludes null and undefined from a type

type Random3 = NonNullable<MyUnion>; // Excludes null and undefined

// Example: Parameters<Type> - Gets the parameter types as an array

const myFunc = (a: number, b: string) => {
  console.log(a + b);
};

type ArrayType = Parameters<typeof myFunc>; // ArrayType = [number, string]

// Example: ConstructorParameters<Type> - Gets constructor parameter types as an array

class SampleClass {
  constructor(public s: string, public t: number) {}
}

type ArrayType2 = ConstructorParameters<typeof SampleClass>; // ArrayType2 = [string, number]

// Example: ReturnType<Type> - Gets the return type of a function

type RType = ReturnType<typeof myFunc>; // RType = void

// Example: InstanceType<Type> - Gets the instance type of a class constructor

type Random4 = InstanceType<typeof SampleClass>; // Random4 = SampleClass

const user2: Random4 = {
  s: "ljk",
  t: 980,
};
