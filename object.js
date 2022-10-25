// Object Literal- an object we create ourselves
// Elements in an array are numerically indexed starting at 0.
const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

console.log(planets[1]); // Venus

const person = ["John", "Doe", 34];
console.log(person[0]); // John

const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 34,
};

console.log(person2.firstName); // John

// Object Literals consist of key-value pairs.
// Object literals are surrounded by curly braces.
// Object literals are indexed by strings.
const planet = {
  name: "Earth",
  age: 4.5,
  isPopulated: true,
  moons: ["Moon"],
};

planet.img =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg";

console.log(planet);
