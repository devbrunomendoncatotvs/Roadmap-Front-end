// 1-Propriedades Estáticas
class OtherEmployeeOne {
  static hiring = 0;

  constructor(
    private name: string,
    private surname: string,
    private title: string
  ) {
    // nome classe + nome propriedade
    OtherEmployeeOne.hiring++;
  }
}
const otherEmployeeOne = new OtherEmployeeOne("Bruno", "Mendonça", "Developer");
const otherEmployeeTwo = new OtherEmployeeOne("Maria", "Santos", "Developer");
console.log(OtherEmployeeOne.hiring);

// 2-Métodos estáticos
class OtherEmployeeTwo {
  private static hiring = 0;

  constructor(
    private name: string,
    private surname: string,
    private title: string
  ) {
    OtherEmployeeTwo.hiring++;
  }

  public static returnHiring() {
    return OtherEmployeeTwo.hiring;
  }
}
const otherEmployeeThree = new OtherEmployeeTwo(
  "Bruno",
  "Mendonça",
  "Front-end Developer"
);
const otherEmployeeFour = new OtherEmployeeTwo("Bruno", "Belo", "Personal");
console.log(OtherEmployeeTwo.returnHiring());

// 3-Propriedades estáticas
type Race = "Spitz Alemão" | "Buldogue" | "Pug" | "Yorkshire" | "Poodle";
class OtherDog {
  public name: string;
  public age: number;
  public races: Race[];
  public static QTD_CACHORRO_SOLD = 0;

  constructor(name: string, age: number, races: Race[]) {
    this.name = name;
    this.age = age;
    this.races = races;

    OtherDog.QTD_CACHORRO_SOLD++;
    console.log(OtherDog.QTD_CACHORRO_SOLD);
  }

  public displayInformation(): void {
    console.log(`O cachorro ${this.name} tem ${this.age}.`);
  }
}
const cachorro_01 = new OtherDog("Pipoca", 4, ["Spitz Alemão"]);
const cachorro_02 = new OtherDog("Farofa", 6, ["Yorkshire"]);
