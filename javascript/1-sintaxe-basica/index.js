//1-Declaração de Variáveis
let name = "Bruno"; //Pode mudar
const age = 26; //Constante não pode mudar
var city = "Goiânia"; //Menos utilizado hoje em dia

//2-Tipos de Dados
let text = "Hello World"; //String
let number = 10; //Number
let isTrue = true; //Boolean
let undefinedValue = undefined; //Undefined
let nullValue = null; //Null

//3-Operadores
let sum = 5 + 3; //Adição`
let mutliply = 5 * 3; //Multiplicação
let divide = 5 / 3; //Divisão
let subtract = 5 - 3; //Subtração
let remainder = 5 % 3; //Resto da divisão
let isEqual = 5 == "5"; //true (Comparação valor)
let isStrictEqual = 5 === "5"; //false (Comparação valor e tipo)

//4-Condicionais
if (age >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

//5-Laços de Repetição
//For
for (let i = 0; i < 5; i++) {
  console.log(i);
}
//While
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
//Do While
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

//6-Funções
function toPresentName(name) {
  return "Hello, my name is" + name;
}
console.log(toPresentName("Bruno")); //Hello, my name is Bruno

//7-Arrow Functions
const sumNumbers = (a, b) => a + b;
console.log(sumNumbers(5, 3)); //8

//8-Obejetos
let person = {
  name: "Bruno",
  age: 26,
  city: "Goiânia",
  toPresent: function () {
    console.log(
      "Hello, my name is " +
        this.name +
        " and I am " +
        this.age +
        " years old." +
        "and I live in " +
        this.city
    );
  },
};
person.toPresent(); //Hello, my name is Bruno and I am 26 years old and I live in Goiânia.

//9-Arrays
let fruits = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
console.log(fruits[0]); //Apple
fruits.push("Mango"); //Adiciona Mango no final do array

//10-DOM
document.getElementById("button").addEventListener("click", function () {
  alert("O botão foi clicado com sucesso!");
});
