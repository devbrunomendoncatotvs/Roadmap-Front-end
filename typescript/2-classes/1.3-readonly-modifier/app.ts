// ==> Exemplo 01
class EmployeeOne {
  readonly dateOfBirth: Date;

  constructor(dateOfBirth: Date) {
    this.dateOfBirth = dateOfBirth;
  }
}

const employee = new EmployeeOne(new Date(1998, 5, 19));

// ==> Exemplo 02
class EmployeeTwo {
  constructor(readonly dateOfBirth: Date) {
    this.dateOfBirth = dateOfBirth;
  }
}

// ==> Exemplo 03
class EmployeeThree {
  name: string;
  readonly codeEmployee: number;

  constructor(name: string, code: number) {
    this.codeEmployee = code;
    this.name = name;
  }
}

const func = new EmployeeThree("Bruno", 112233);
func.name = "Bruno Mendonça";
console.log(func);

// ==> Exemplo 04 - Interface
interface IEmployee {
  codeEmployee: number;
  nameEmployee: string;
}

const EnployeeOne: Readonly<IEmployee> = {
  codeEmployee: 506699,
  nameEmployee: "Marcia",
};

const EnployeeTwo: IEmployee = {
  codeEmployee: 506699,
  nameEmployee: "Bruno",
};

EnployeeTwo.codeEmployee = 887653;
EnployeeTwo.nameEmployee = "Mendonça";
