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

type UserRole = "guest" | "admin" | "user";
let userRoler: UserRole = "guest";

type User = {
  userName: string;
  role: UserRole;
};
const users: User[] = [
  { userName: "jon doe", role: "admin" },
  { userName: "guest_user", role: "guest" },
  { userName: "jane doe", role: "admin" },
];
const fetchUserWithDetails = (username: string): User => {
  const user = users.find((u) => u.userName === username);
  if (!user) {
    throw new Error(`User with ${username} cannot be found`);
  }
  return user;
};
