// 1-funções:
function logError(errorMessage) {
    console.log(errorMessage);
    // return errorMessage;
}
logError("Required field - Name!");
// 2-funções:
var logErrorExample2 = function (errorMessage) {
    console.log(errorMessage);
};
logErrorExample2("Required field - Surname");
// ==> Exemplo void: variáveis
var variavelExemploVoid;
//variavelExemploVoid = 1;
//variavelExemploVoid = null;
variavelExemploVoid = undefined;
console.log(variavelExemploVoid);
