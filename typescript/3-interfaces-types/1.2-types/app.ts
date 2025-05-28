// 1-Type para objeto simples
type Produto = {
  nome: string;
  preco: number;
  emEstoque: boolean;
};

const item: Produto = {
  nome: "Notebook",
  preco: 3500,
  emEstoque: true,
};

// 2-Type com união (union type)
type ID = number | string;

let usuarioId: ID;

usuarioId = 123; // OK
usuarioId = "abc123"; // OK

// 3-Type com interseção (intersection type)
type OtherPersonOne = {
  nome: string;
};

type OtherEmployee = {
  cargo: string;
};

type EmployeeCompleted = OtherPersonOne & OtherEmployee;

const maria: EmployeeCompleted = {
  nome: "Maria",
  cargo: "Desenvolvedora",
};

// 4-Type com tuplas
type Coordenada = [number, number];

const ponto: Coordenada = [10, 20];

// 5-Type com funções
type Soma = (a: number, b: number) => number;

const somar: Soma = (x, y) => x + y;

// 6-Type para tipo literal restrito
type Direcao = "norte" | "sul" | "leste" | "oeste";

const mover = (direcao: Direcao) => {
//  console.log(`Movendo para ${direcao}`);
};

mover("norte");

// 7-Type com readonly
type Configuracao = {
  readonly tema: string;
  readonly versao: number;
};

const config: Configuracao = {
  tema: "escuro",
  versao: 1.2,
};

// 8-Type com optional (?)
type UserOne = {
  nome: string;
  idade?: number; // opcional
};

const userOne: UserOne = { nome: "Ana" };
const userTwo: UserOne = { nome: "Pedro", idade: 25 };

// 9-Type Guard: typeof
type alfanumerico = string | number;

function exibirTipo(a: alfanumerico, b: alfanumerico) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }

  throw new Error(
    "Argumentos inválidos! Ambos os argumentos devem ser do tipo (umber) ou (string)"
  );
}
console.log(exibirTipo(5, 10))

// 10-Type Guard: instanceof
class Car {
  name: string;
  mark: string;

  constructor(name: string, mark: string) {
    this.name = name
    this.mark = mark
  }
}

class Motorcycle {
  name: string
  year: number

  constructor(name: string, year: number) {
     this.name = name
     this.year = year
  }
}
class Bike {
  name: string
  mark: string

  constructor(name: string, mark: string) {
    this.name = name
    this.mark = mark
  }
}

function detailsVehicle(vehicle: Car | Motorcycle | unknown) {

  if(vehicle instanceof Car){
  return `O nome do veículo é (${vehicle.name}) e a sua marca é (${vehicle.mark})` 
  }else if(vehicle instanceof Motorcycle){
      return  `O nome do veículo é (${vehicle.name}) e seu ano é (${vehicle.year})` 
  }else {
    return 'O tipo de veiculo mencionado não pode ser indentificado!' 
  }
}

const newCar = new Car('Civic', 'Honda')
const newBike = new Bike('Aro 29', 'Caloi')
//console.log(detailsVehicle(newBike))

// 11-Type Guard: in

interface IAnimal {
  typeAnimal: string
}

class Cow implements IAnimal {
  typeAnimal: string;
  colorCow: string

  constructor(typeAnimal: string, colorGrow: string) {
    this.typeAnimal = typeAnimal
    this.colorCow = colorGrow
  }
}

class Fish implements IAnimal{
  typeAnimal: string;
  colorFish: string 

  constructor(typeAnimal: string, colorFish: string) {
    this.typeAnimal = typeAnimal
    this.colorFish = colorFish
  }
}

function eatWeeds(typeAnimal: string) {
  console.log(`O animal é ${typeAnimal} e ele está comendo mato`)
}

function swim(typeAnimal: string){
  console.log(`O animal é ${typeAnimal} e ele está nadando`)
}

function indentifyAnimal(typeAnimal: IAnimal) {
  if('colorCow' in typeAnimal){
    eatWeeds((typeAnimal as Cow).typeAnimal)
  } else if('colorFish' in typeAnimal){
    swim((typeAnimal as Fish).typeAnimal)
  }
}

indentifyAnimal(new Cow('Vaca', 'Branca com pintas pretas'))
indentifyAnimal(new Fish('Tucúnare', 'Azulão'))

interface Humano {
  falar: () => void;
}

interface Bicho {
  latir: () => void;
}

const indentificarSom = (som: Humano | Bicho) => {
  if ('falar' in som) {
    return som.falar;
  } else if( 'latir' in som){
    return som.latir;
  }
};