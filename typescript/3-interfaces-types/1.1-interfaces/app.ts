// 1Interface básica
interface ICar {
  marca: string;
  modelo: string;
  ano: number;
}

const myNewCar: ICar = {
  marca: "Honda",
  modelo: "Civic",
  ano: 2013,
};

//2-Type com união de tipos
type Status = "carregando" | "sucesso" | "erro";

let estadoAtual: Status = "sucesso";

// 3-Interface com método
interface AnimalOne {
  nome: string;
  falar(): void;
}

const dog: AnimalOne = {
  nome: "Rex",
  falar() {
    console.log("Au au!");
  },
};

// 4-Type complexo com interseção
type Pessoa = { nome: string };
type Funcionario = Pessoa & { salario: number };

const pedro: Funcionario = {
  nome: "João",
  salario: 5000,
};

// 5-Interface estendendo outra
interface Usuario {
  nome: string;
  email: string;
}

interface AdminOne extends Usuario {
  nivel: number;
}

const adminOne: AdminOne = {
  nome: "Ana",
  email: "ana@admin.com",
  nivel: 1,
};
