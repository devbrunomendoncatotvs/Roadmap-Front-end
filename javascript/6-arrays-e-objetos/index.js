//1-Arrays
let fruits = ["banana", "apple", "orange"];
console.log(fruits[0]); // banana

//1.1-Métodos básicos
//push() - Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
fruits.push("grape");
//pop() - Remove o último elemento de um array e o retorna. Este método altera o comprimento do array.
fruits.pop(); // grape
//shift() - Remove o primeiro elemento de um array e o retorna. Este método altera o comprimento do array.
fruits.shift(); // banana
//unshift() - Adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.
fruits.unshift("kiwi"); // ['kiwi', 'apple', 'orange']
//length - Propriedade que retorna o número de elementos em um array.
console.log(fruits.length); // 3
//includes() - Método que verifica se um array contém um determinado elemento, retornando true ou false.
console.log(fruits.includes("apple")); // true
//indexOf() - Método que retorna o primeiro índice em que um determinado elemento pode ser encontrado em um array, ou -1 se não estiver presente.
console.log(fruits.indexOf("orange")); // 2
//join() - Método que junta todos os elementos de um array em uma string, separados por um delimitador especificado.
console.log(fruits.join(", ")); // "kiwi, apple, orange"
//slice() - Método que retorna uma cópia rasa de uma parte de um array em um novo array, selecionando os elementos entre o início e o fim (fim não incluído).
console.log(fruits.slice(1, 2)); // ['apple']
//splice() - Método que altera o conteúdo de um array removendo ou substituindo elementos existentes e/ou adicionando novos elementos no lugar.
console.log(fruits.splice(1, 1)); // ['apple']
//reverse() - Método que inverte a ordem dos elementos de um array.
console.log(fruits.reverse()); // ['orange', 'kiwi']
//sort() - Método que ordena os elementos de um array em ordem alfabética ou numérica.
console.log(fruits.sort()); // ['kiwi', 'orange']

//1.2-Métodos de iteração e transformação
//forEach() - Método que executa uma função fornecida uma vez para cada elemento do array.
fruits.forEach((fruit) => {
  console.log(fruit);
});
//map() - Método que cria um novo array com os resultados da chamada de uma função para cada elemento do array.
let numbers = [1, 2, 3];
let doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6]
//filter() - Método que cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
let filtered = numbers.filter((number) => number > 1);
console.log(filtered); // [2, 3]
//find() - Método que retorna o valor do primeiro elemento do array que satisfaz a função de teste fornecida. Caso contrário, undefined é retornado.
let found = numbers.find((number) => number > 1);
//reduce() - Método que executa uma função redutora em cada elemento do array, resultando em um único valor.
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // 6
//some() - Método que testa se pelo menos um elemento no array passa no teste implementado pela função fornecida.
let hasEven = numbers.some((number) => number % 2 === 0);
console.log(hasEven); // true
//every() - Método que testa se todos os elementos no array passam no teste implementado pela função fornecida.
let allEven = numbers.every((number) => number % 2 === 0);
console.log(allEven); // false

//Objetos
let person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};
//Acessar propriedades
console.log(person.name); // John
console.log(person["age"]); // 30
person.greet(); // Hello, John
//Adicionar/modificar propriedades
person.city = "New York";
//Remover propriedades
delete person.age;

//3. Array de Objetos
let people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mike", age: 35 },
];
for (let i = 0; i < people.length; i++) {
  console.log(people.name + " tem " + people.age + " anos.");
}
