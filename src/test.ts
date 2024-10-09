type address = {
  street: string;
  city: string;
  country: string;
};
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: address;
};

let person: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
  address: {
    street: "123 main",
    city: "New York",
    country: "USA",
  },
};
let person2: Person = {
  name: "Jill",
  age: 66,
  isStudent: false,
  address: {
    street: "123 main",
    city: "New York",
    country: "USA",
  },
};

let people: Person[] = [person, person2];
console.log(people);

let myName = "jon";
const myName2 = "jon";
