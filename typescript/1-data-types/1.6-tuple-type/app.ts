//1-Uso simples de Tuplas em Typescript
let personOne: [string, string, number];
personOne = ["Bruno Mendonça", "Developer Front-end", 27];
console.log(personOne);

//2-Acessando um valor da Tupla
let personTwo: [string, string, number];
personTwo = ["Bruno Mendonça", "Front-end Developer", 27];
console.log(personTwo[1]);

//3-Usando Tuplas com labels
let personThree: [name: string, function: string, age: number] = [
  "Bruno Mendonça",
  "Developer",
  27,
];
console.log(personThree);

//4-Usando Tuplas com Spreed Operator
let listFruitsOne: [string, ...string[]] = ["🍍", "🍊", "🍎", "🍉", "🥭"];
console.log(...listFruitsOne);

//5-Lista Heterogênea de Tupla
let listFruitsTwo: [number, boolean, ...string[]] = [5, true, ...listFruitsOne];
console.log(listFruitsTwo);

//6-Uso de função com Tuplas
function listPersons(names: string[], ages: number[]) {
  return [...names, ...ages];
}

let resultListPersons = listPersons(["Bruno", "Gabriela"], [27, 38]);
console.log(resultListPersons);

//7-Labeled Tuples com Spread Operator numa função
type Name =
  | [firstName: string, lastName: string]
  | [firstName: string, midleName: string, lastName: string];

function createPerson(...name: Name) {
  return [...name];
}
