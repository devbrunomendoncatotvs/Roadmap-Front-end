//1-Função Tradicional
function greeting(name) {
  return "Hello, my name is " + name + "!";
}
console.log(greeting("Bruno"));

//2-Função Anônima
const sum = function (a, b) {
  return a + b;
};
console.log(sum(10, 5));

//3-Arrow Function
const double = (x) => x * 2;
console.log(double(5));

//4-Parâmetros Padrão
const otherGreeting = (name = "valor padrão caso nenhum seja passado") => {
  return "Hello, my name is " + name;
};
console.log(otherGreeting);

//5-Parâmetros Rest (...args)
const sumAll = (...numbers) => {
  return number.reduce((total, number) => total + number, 0);
};
console.log(sumAll(20, 35, 98, 2));

//6-Funções como Parâmetros
function calculate(a, b, operation) {
  return operation(a, b);
}
console.log(calculate(5, 10, (x, y) => x + y));

//7-Função Recursiva
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));
