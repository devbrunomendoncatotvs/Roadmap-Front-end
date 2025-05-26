var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//1-Uso simples de Tuplas em Typescript
var personOne;
personOne = ["Bruno Mendonça", "Developer Front-end", 27];
console.log(personOne);
//2-Acessando um valor da Tupla
var personTwo;
personTwo = ["Bruno Mendonça", "Front-end Developer", 27];
console.log(personTwo[1]);
//3-Usando Tuplas com labels
var personThree = [
    "Bruno Mendonça",
    "Developer",
    27,
];
console.log(personThree);
//4-Usando Tuplas com Spreed Operator
var listFruitsOne = ["🍍", "🍊", "🍎", "🍉", "🥭"];
console.log.apply(console, listFruitsOne);
//5-Lista Heterogênea de Tupla
var listFruitsTwo = __spreadArray([5, true], listFruitsOne, true);
console.log(listFruitsTwo);
//6-Uso de função com Tuplas
function listPersons(names, ages) {
    return __spreadArray(__spreadArray([], names, true), ages, true);
}
var resultListPersons = listPersons(["Bruno", "Gabriela"], [27, 38]);
console.log(resultListPersons);
function createPerson() {
    var name = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        name[_i] = arguments[_i];
    }
    return __spreadArray([], name, true);
}
