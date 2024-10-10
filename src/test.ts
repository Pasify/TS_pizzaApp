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
// console.log(people);

type User = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin";
};

type UpdateType = Partial<User>;
const users: User[] = [
  { id: 1, username: "john_doe", role: "member" },
  { id: 2, username: "jane_smith", role: "contributor" },
  { id: 3, username: "alice_jones", role: "admin" },
  { id: 4, username: "charlie_brown", role: "member" },
];
let nextUserID = 1;

function updateUser(id: number, updates: UpdateType) {
  let foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    console.error("User not found!");
    return;
  }
  //   let updatedUser = { ...user, ...updates };
  Object.assign(foundUser, updates);
}
function addNewUser(newUser: Omit<User, "id">): User {
  let user: User = { ...newUser, id: nextUserID++ };
  users.push(user);
  return user;
}
addNewUser({ username: "joe_schmoe", role: "member" });
console.log(users);

// generics

const gameScores: number[] = [14, 21, 33, 42, 59];
const favoriteThings: string[] = [
  "raindrops on roses",
  "whiskers on kittens",
  "bright copper kettles",
  "warm woolen mittens",
];
const voters: { name: string; age: number }[] = [
  { name: "Alice", age: 42 },
  { name: "Bob", age: 77 },
];

function getLastItem<PlaceHolderType>(
  array: PlaceHolderType[]
): PlaceHolderType {
  return array[array.length - 1];
}
console.log(`last game score is`, getLastItem(gameScores));
console.log(`last favorite thing is`, getLastItem(favoriteThings));
console.log(`last voter is`, getLastItem(voters));
