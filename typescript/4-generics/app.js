// 1-Função genérica básica
function identidade(valor) {
    return valor;
}
var numero = identidade(42);
var texto = identidade("Olá mundo");
// 2-Array genérico
function primeiroElemento(lista) {
    return lista[0];
}
var primeiro = primeiroElemento([10, 20, 30]);
var palavra = primeiroElemento(["a", "b", "c"]);
var coordenada = { primeiro: 10, segundo: 20 };
var resultado = { primeiro: "OK", segundo: true };
// 4-Classe genérica
var Caixa = /** @class */ (function () {
    function Caixa(valor) {
        this.conteudo = valor;
    }
    return Caixa;
}());
var caixaString = new Caixa("mensagem");
var caixaNumero = new Caixa(123);
// 5-Restrição com extends
function mostrarNome(obj) {
    console.log(obj.nome);
}
mostrarNome({ nome: "Carlos", idade: 30 });
var UsuarioRepo = /** @class */ (function () {
    function UsuarioRepo() {
    }
    UsuarioRepo.prototype.salvar = function (item) {
        console.log("Salvando", item);
    };
    UsuarioRepo.prototype.buscar = function (id) {
        return "Usuário" + id;
    };
    return UsuarioRepo;
}());
