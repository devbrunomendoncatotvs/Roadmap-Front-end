// 1-Tipo Unknown
var valorVariavel;
valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = "Oi! Tudo bem?";
// console.log(valorVariavel);
// 2-Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos!
/*let valor: unknown;

let valor1: boolean = valor;
let valor2: any = valor;
let valor3: any[] = valor;
let valor4: string = valor;*/
// 3-diferença entre: 'any' vs 'unknown'
var algumaCoisaAny;
var algumaCoisaUnknown;
console.log(algumaCoisaAny.toFixed());
if (typeof algumaCoisaUnknown === "number") {
    console.log(algumaCoisaUnknown.toFixed());
}
