//1-Operadores Aritméticos
let numberOne = 10;
let numberTwo = 5;

a + b; //15 (adição)
a - b; //5 (subtração)
a * b; //50 (mutiplicação)
a / b; //2 (divisão)
a % b; //0 (resto da divisão)
a ** b; //100000 (exponenciação)

//2-Operadores de Atribuição
let valueX = 10;

valueX += 5; // valueX = valueX + 5 → 15
valueX -= 5; // valueX = valueX - 5 → 10
valueX *= 5; // valueX = valueX * 5 → 50
valueX /= 5; // valueX = valueX / 5 → 10
valueX %= 5; // valueX = valueX % 5 → 0
valueX **= 5; // valueX = valueX ** 5 → 100000

//3-Operadores de Comparação
5 == 5; // true (igualdade)
5 === "5"; // false (igualdade estrita: valor + tipo)
5 != 4; // true (diferente)
5 !== "5"; //true (diferente estrito: valor + tipo)
5 > 4; // true (maior que)
5 < 3; // false (menor que)
5 >= 5; // true (maior ou igual)
5 <= 4; // false (menor ou igual)

//4-Operadores Lógicos
true && true; // true (E)
true || false; // true (OU)
!true; //false (NEGAÇÃO)

//Exemplo
const age = 25;
const hasPermission = true;

if (age > 18 && hasPermission) {
  console.log("Posso dirigir");
}

//5-Operador Ternário
const otherAge = 16;
let status = otherAge >= 18 ? "Maior de idade" : "Menor de idade";

//6-Operador typeof e instanceof
typeof "Hello"; // "string"
typeof 123; // "number"
typeof []; // "object"
[1, 2, 3] instanceof Array; // true

//7-Operador de Coalescência Nula
let name = null;
let result = name ?? "Visitante";
console.log(resultado); // "Visitante"

//8-Operador de Encadeamento Opcional
let user = {};
console.log(user.address?.streat); // undefined

//9-Operador de Spread
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

//10-Operador de Desestruturação
const person = {
  otherName: "Barbara",
  address: {
    city: "Aparecida de Goiânia",
    state: "Goias",
  },
};
const { otherName } = person;
console.log(name); // "Barbara"
