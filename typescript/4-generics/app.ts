// 1-Função genérica básica
function identidade<T>(valor: T): T {
  return valor;
}

const numero = identidade(42);
const texto = identidade("Olá mundo");

// 2-Array genérico
function primeiroElemento<T>(lista: T[]): T {
  return lista[0];
}

const primeiro = primeiroElemento([10, 20, 30]);
const palavra = primeiroElemento(["a", "b", "c"]);

// 3-Usando Generics com type
type Par<T, U> = {
  primeiro: T;
  segundo: U;
};

const coordenada: Par<number, number> = { primeiro: 10, segundo: 20 };
const resultado: Par<string, boolean> = { primeiro: "OK", segundo: true };

// 4-Classe genérica
class Caixa<T> {
  conteudo: T;
  constructor(valor: T) {
    this.conteudo = valor;
  }
}

const caixaString = new Caixa("mensagem");
const caixaNumero = new Caixa(123);

// 5-Restrição com extends
function mostrarNome<T extends { nome: string }>(obj: T) {
  console.log(obj.nome);
}

mostrarNome({ nome: "Carlos", idade: 30 });

// 6-Generics com interfaces
interface Repositorio<T> {
  salvar(item: T): void;
  buscar(id: number): T;
}

class UsuarioRepo implements Repositorio<string> {
  salvar(item: string) {
    console.log("Salvando", item);
  }
  buscar(id: number) {
    return "Usuário" + id;
  }
}
