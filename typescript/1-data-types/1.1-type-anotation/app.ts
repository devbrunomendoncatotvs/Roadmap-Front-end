// 1-Variáveis [Type Annotations]
let nome: string = "Bruno Mendonça";
console.log(nome);

// 2-Arrays [Type Annotations]
let animais: string[] = ["Cachorro", "Leão", "Onça"];
console.log(animais);

// 3-Objetos [Type Annotations]
let car: {
  name: string;
  year: number;
  price: number;
};

car = { name: "Honda Civic", year: 2013, price: 63000 };
console.log(car);

// 4-Functions [Type Annotation]
function multiplicarNumero(num1: number, num2: number) {
  return num1 * num2;
}
