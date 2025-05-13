//1-Estrutura condicional (if, else if, else)
let age = 27;

if (age < 16) {
  console.log("Menor de idade e não está apto para votar e nem dirigir.");
} else if (age >= 16 && age < 18) {
  console.log("Menor de idade e está apto para votar mas não para dirigir.");
} else {
  console.log(
    "Maior de idade e está apto para votar e para dirigir caso tenha carteira de motorista."
  );
}

//2-Operador Ternário
const result = age >= 18 ? "Maio de idade" : "Menor de idade";
console.log(result);

//Estrutura condicional switch
const day = 5;
switch (day) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
}

//3-Estrutura de repetição (for)
for (let i = 0; i <= 10; i++) {
  console.log("Número: " + i);
}

//4-Estrutura de repetição (while)
let i = 0;
while (i <= 10) {
  console.log("Número " + i);
  i++;
}

//5-Estrutura de repetição (do while)
let j = 0;
do {
  console.log("Número " + j);
  j++;
} while (j <= 10);
{
  console.log("Número " + j);
  j++;
}

//6-Estrutura de repetição (for of)
let fruits = ["maçã", "banana", "laranja"];
for (let fruit of fruits) {
  console.log(fruit);
}

//7-Estrutura de repetição (for in)
let person = {
  name: "João",
  age: 30,
  city: "São Paulo",
};
for (let key in person) {
  console.log(key + ": " + person[key]);
}
