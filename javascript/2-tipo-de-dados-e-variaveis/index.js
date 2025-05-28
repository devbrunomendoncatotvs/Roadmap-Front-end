//1-Tipos Primitivos
let name = "Bruno"; //String
let age = 26; //Number
let isActive = true; //Boolean
let balance; //Undefined
let empty = null; //Null
let bigInt = 1234567890123456789012345678901234567890n; //BigInt
let symbol = Symbol("id"); //Symbol

//2-Tipos de Referência
let person = {
  name: "Bruno",
  age: 26,
  isActive: true,
}; //Object
let numbers = [1, 2, 3, 4, 5]; //Array

//3-Verificar o Tipo com typeof
console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof isActive); //boolean
console.log(typeof balance); //undefined
console.log(typeof empty); //object
console.log(typeof bigInt); //bigint
console.log(typeof symbol); //symbol
console.log(typeof person); //object
console.log(typeof numbers); //object
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof NaN); //number
console.log(typeof Infinity); //number

//4-Conversão de Tipos
String(123); //"123"
123 + ""; // "123"

Number("123"); //123
parseInt("123"); //123)
parseFloat("123.50"); //123.50

Boolean(0); //false
Boolean(1); //true
Boolean(""); //false
Boolean(" "); //true
Boolean(null); //false
Boolean(undefined); //false
Boolean(NaN); //false
Boolean("false"); //true
Boolean("0"); //true
