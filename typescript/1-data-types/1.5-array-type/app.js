var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1-Uso de Colchetes
var frutas = ["🍍", "🍊", "🍎", "🍉", "🥭"];
console.log(frutas[2]);
// 2-Array Object (Objeto Array)
var frutas1 = ["🍍", "🍊", "🍎", "🍉", "🥭"];
console.log(frutas1[3]);
// 3-Adicionando mais strings com método 'push'
var idiomas = ["Português", "Inglês", "Espanhol", "Francês"];
console.log(idiomas);
idiomas.push("Mandarim");
console.log(idiomas);
idiomas.push("Italiano");
console.log(idiomas);
// 4-Identificar tamanho do array - método 'length'
var idiomas1 = ["Português", "Inglês", "Espanhol", "Francês"];
console.log(idiomas1.length);
// 5-Exemplo de Array com Spread Operator
var listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = __spreadArray(__spreadArray([], listaNumeros, true), [6, 7, 8, 9, 10], false);
console.log(listaNumeros);
// 6-Exemplo de Array com laço de iteração
var linguagensArray = new Array("JavaScript", "Python", "PHP", "C#");
function funcaoLinguagens(linguagens) {
    for (var i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);
