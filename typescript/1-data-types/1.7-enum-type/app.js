// 1-Numeric Enums (Enums Numérico)
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
console.log(Idioma);
// 2-String Enums
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["Sabado"] = "SAB";
    Dia["Domingo"] = "DOM";
})(Dia || (Dia = {}));
console.log(Dia);
function comida(c) {
    return "Comidas muito apetitosas!";
}
console.log(comida("Pizza" /* Comida.Pizza */));
console.log(comida("Churrasco" /* Comida.Churrasco */));
// 4-Quando usar enum?
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
var concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: "Parabéns! Tarefa concluída com sucesso!",
};
if (concluidaTarefa.status === Tarefa.Done) {
    console.log("Enviar e-mail: Tarefa Concluída!");
}
