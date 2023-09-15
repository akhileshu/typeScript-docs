// Function with objects
interface Product {
  name: string;
  stock: number;
  price: number;
  photo: string;
  rating?: string; // Optional property
  readonly id: string; // Readonly property
}

type GetDataType = (product: Product) => void; // Type alias

const getData: GetDataType = (product) => {
  // You can access all properties of the 'product' object here
  // For example: console.log(product.name, product.price);

  // However, you cannot modify 'readonly' properties
  // product.id = 'dkflsjdklsjf'; // This is not allowed
};

const productOne: Product = {
  name: "Macbook",
  stock: 89,
  price: 423890,
  photo: "sdkjl",
  id: "dsjklsdfjsfjsfdkj",
};
getData(productOne);

// 'never' type - used for functions that never return normally
const errorHandler = (): never => {
  throw new Error("An error occurred");
};
const errorHandler2 = (): Error => {
  return new Error("Another error occurred");
};

// Type alias for theme modes
type ThemeMode = "light" | "dark";
// const mode: ThemeMode = 'dfs'; // This is not allowed, as it must be 'light' or 'dark'

// Classes
class Player {
  readonly id: string; // Readonly property

  constructor(
    private height: number,
    public weight: number,
    protected power: number
  ) {
    this.id = String(Math.random() * 100);
  }

  getHeight = (): number => this.height; // Method

  // Getter - can be accessed as a property (e.g., abhi.heightGetter)
  get heightGetter(): number {
    return this.height;
  }

  // Setter - allows modifying 'height' property
  set heightSetter(value: number) {
    this.height = value;
  }
}

class Player2 extends Player {
  special: boolean; // Public property

  constructor(height: number, weight: number, power: number, special: boolean) {
    // Call the superclass (Player) constructor
    super(height, weight, power);

    this.special = special;
  }
}

const abhi = new Player2(100, 150, 23, true);
// Example usage of class members
// console.log(abhi.getHeight(), abhi.special, abhi.weight);
// console.log(abhi.heightGetter);
abhi.heightSetter = 500;
// console.log(abhi.heightGetter);

// 'implements' keyword - Product2 implements ProductType
interface ProductType {
  name: string;
  price: number;
  stock: number;
  getId: () => string;
  offer?: boolean;
}

class Product2 implements ProductType {
  private id: string = String(Math.random() * 100);

  constructor(public name: string, public price: number, public stock: number) {}

  // Implementation of 'getId' method from ProductType
  getId = () => this.id;
}

const product2 = new Product2("iPhone 15", 999, 9);
// Example usage of Product2
// console.log(product2.name, product2.price, product2.stock, product2.getId());
