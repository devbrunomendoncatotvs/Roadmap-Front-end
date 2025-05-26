// 1-Uso de Colchetes
let frutas: string[] = ["🍍", "🍊", "🍎", "🍉", "🥭"];
console.log(frutas[2]);

// 2-Array Object (Objeto Array)
let frutas1: Array<string> = ["🍍", "🍊", "🍎", "🍉", "🥭"];
console.log(frutas1[3]);

// 3-Adicionando mais strings com método 'push'
let idiomas: Array<string> = ["Português", "Inglês", "Espanhol", "Francês"];
console.log(idiomas);
idiomas.push("Mandarim");
console.log(idiomas);
idiomas.push("Italiano");
console.log(idiomas);

// 4-Identificar tamanho do array - método 'length'
let idiomas1: Array<string> = ["Português", "Inglês", "Espanhol", "Francês"];
console.log(idiomas1.length);

// 5-Exemplo de Array com Spread Operator
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];

console.log(listaNumeros);

// 6-Exemplo de Array com laço de iteração
let linguagensArray: string[] = new Array("JavaScript", "Python", "PHP", "C#");

function funcaoLinguagens(linguagens: string[]) {
  for (let i = 0; i < linguagens.length; i++) {
    console.log(linguagensArray[i]);
  }
}

funcaoLinguagens(linguagensArray);
