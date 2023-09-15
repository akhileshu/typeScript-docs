// Type Assertion - Explicitly specifying the type of an element
// Baap ko mat sikha (Don't teach your father)

// Using 'as' keyword to assert the type of an element
const btn = document.getElementById("clickBtn") as HTMLElement;

// Using angle brackets to assert the type (older syntax, equivalent to 'as' keyword)
const btn2 = <HTMLElement>document.getElementById("clickBtn");

// Using '!' operator to assert that the element exists (not null or undefined)
const btn3 = document.getElementById("clickBtn")!;

// Attaching an event listener to the button if any of the above assertions is successful
btn.onclick || btn2.onclick || btn3.onclick;

// Be More Specific with Type Assertion

// Asserting the type of an image element
const img = document.getElementById("myImg") as HTMLImageElement;

// Using querySelector to select an image element and asserting its type
const img2 = document.querySelector("img")!;

// Accessing the 'src' property of the image elements
img.src || img2.src;

// Now you can access image methods on 'img'

// Form Handling ----------------------------------------------------

// Selecting a form element and asserting its type
const myForm = document.querySelector("#myForm") as HTMLFormElement;

// Selecting an input element within the form and asserting its type
const myInput = document.querySelector("form > input") as HTMLInputElement;

// Handling the form submission
myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const value = Number(myInput.value);
  const newValue = value + 20;
  console.log(value, newValue);

  // Task: Display the added value below the form
  myForm.append(String(newValue));
  console.log(typeof value, typeof newValue);
};

// Index Signature, keyof Operator, Dynamic Key

// Defining an interface 'Person' with index signature (dynamic key)
interface Person {
  name: string;
  email: string;
  // [key: string]: string; // Allowing dynamic keys
}

// Creating an object 'myObj' based on the 'Person' interface
const myObj: Person = {
  name: "abhi",
  email: "abhi@gmal.com",
};

// Using the 'keyof' operator to specify a key
let key = "name";
// Accessing a property of 'myObj' using the 'keyof' operator
myObj[key as keyof Person] || myObj[key as keyof typeof myObj];

// Functions to get 'name' and 'email' properties of 'myObj' using dynamic keys
const getName = (): string => {
  return myObj["name"];
};
const getEmail = (): string => {
  return myObj["email"];
};

// Function to get a property of 'myObj' using 'keyof' operator
const getDate2 = (key: keyof Person): string => {
  return myObj[key];
};

// Example usages
console.log(getDate2("name"), getDate2("email"), myObj.name); // abhi abhi@gmal.com abhi
// You can't do getDate2("lol") because 'lol' is not a valid key
