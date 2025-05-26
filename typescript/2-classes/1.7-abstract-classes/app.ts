abstract class Clerk {
  constructor(private name: string, private surname: string) {}

  abstract returnWage(): number;
  get returnNameClompleted(): string {
    return `${this.name} ${this.surname}`;
  }

  issueCounterCheck(): string {
    return `${this.returnNameClompleted} - Salário: ${this.returnWage()}`;
  }
}

class ClerkCLT extends Clerk {
  constructor(name: string, surname: string, private wage: number) {
    super(name, surname);
  }

  returnWage(): number {
    return this.wage;
  }
}

class ClerkPJ extends Clerk {
  constructor(
    name: string,
    surname: string,
    private valueHour: number,
    private hoursWorked: number
  ) {
    super(name, surname);
  }

  returnWage(): number {
    return this.valueHour * this.hoursWorked;
  }
}

const bruno = new ClerkCLT("Bruno", "Mendonça", 18000);
const joao = new ClerkPJ("João", "Silva", 150, 160);

console.log(bruno.issueCounterCheck());
console.log(joao.issueCounterCheck());
