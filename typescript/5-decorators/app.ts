// 1-lass Decorator
function Logger(construtor: Function) {
  console.log("Classe carregada:", construtor.name);
}

@Logger
class Personn {
  constructor(public nome: string) {}
}

// 2-Property Decorator
function logPropriedade(target: any, key: string) {
  console.log(`Propriedade: ${key}`);
}

class Product {
  @logPropriedade
  nome: string = "";
}

// 3-Method Decorator
function logMetodo(target: any, key: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Método chamado: ${key}`);
    return metodoOriginal.apply(this, args);
  };
}

class Calculadora {
  @logMetodo
  somar(a: number, b: number) {
    return a + b;
  }
}

// 4-Accessor Decorator (getter/setter)
function logAcesso(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.get!;
  descriptor.get = function () {
    console.log(`Acessando: ${key}`);
    return original.call(this);
  };
}

class Conta {
  private saldoInterno: number = 100;

  @logAcesso
  get saldo() {
    return this.saldoInterno;
  }
}

// 5-Parameter Decorator
function logParametro(target: any, methodName: string, index: number) {
  console.log(`Parâmetro decorado no método ${methodName}, índice ${index}`);
}

class Teste {
  imprimir(@logParametro valor: string) {
    console.log(valor);
  }
}
