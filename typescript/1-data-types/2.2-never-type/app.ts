// 1-Never: Throw Exception
function error(message: string): never {
  throw new Error(message);
}
console.log(error("Erro de Mensagem - 01"));

// 2-Never inferido automaticamente
function rejectMessage() {
  return error("Error de Mensagem - 02");
}
console.log(rejectMessage());

// 3-Função que contém loop infinito retorna o tipo 'never'
const loopInfinito = function loop() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    console.log("Hello, Developers!");
  }
};
console.log(loopInfinito());

// ==> Exemplo 04: Diferença entre os tipos: 'never' x 'void'
//const algumaCoisaVoid: void = null;
//console.log(algumaCoisaVoid);

// ==> dará erro! (// Error: Type 'null' is not assignable to type 'never')
//const algumaCoisaNever: never = null;
//console.log(algumaCoisaNever);
