"use strict";
let personOne;
personOne = ["Bruno Mendonça", "Developer Front-end", 27];
console.log(personOne);
let personTwo;
personTwo = ["Bruno Mendonça", "Front-end Developer", 27];
console.log(personTwo[1]);
let personThree = [
    "Bruno Mendonça",
    "Developer",
    27,
];
console.log(personThree);
let listFruitsOne = ["🍍", "🍊", "🍎", "🍉", "🥭"];
console.log(...listFruitsOne);
let listFruitsTwo = [5, true, ...listFruitsOne];
console.log(listFruitsTwo);
function listPersons(names, ages) {
    return [...names, ...ages];
}
let resultListPersons = listPersons(["Bruno", "Gabriela"], [27, 38]);
console.log(resultListPersons);
function createPerson(...name) {
    return [...name];
}
