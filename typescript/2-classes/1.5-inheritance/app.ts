// ==> Exemplo 01
class NewAnimal {
  move(distance = 0) {
    console.log(`Animal se moveu...: ${distance} metros.`);
  }
}

class Dog extends NewAnimal {
  bark() {
    console.log("Au, Au!");
  }
}
const cachorro = new Dog();
cachorro.bark();
cachorro.move(10);
cachorro.bark();

// ==> Exemplo 02
class OtherPerson {
  constructor(private name: string, private surname: string) {
    this.name = name;
    this.surname = surname;
  }

  returnNameCompletedOne(): string {
    return `${this.name} ${this.surname}`;
  }

  toPresentPerson(): string {
    return `Meu nome é ${this.name} ${this.surname}.`;
  }
}

class Employee extends OtherPerson {
  constructor(name: string, surname: string, private func: string) {
    super(name, surname);
  }

  returnNameCompletedTwo(): string {
    return super.toPresentPerson() + `E, sou ${this.func}`;
  }
}

const newEmployee = new Employee("Bruno", "Mendonça", "Full-stack Developer");
console.log(newEmployee.toPresentPerson());
console.log(newEmployee.returnNameCompletedOne());
console.log(newEmployee.returnNameCompletedTwo());
