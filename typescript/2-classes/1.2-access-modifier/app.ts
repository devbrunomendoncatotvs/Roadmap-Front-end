// 1-Modificador: public
class SchollBoyOne {
  codeSchollBoy: number;
  nameSchollBoy: string;
}

const schollBoyOne = new SchollBoyOne();
schollBoyOne.codeSchollBoy = 201;
schollBoyOne.nameSchollBoy = "Bruno Mendonça";
console.log(schollBoyOne.codeSchollBoy);
console.log(schollBoyOne.nameSchollBoy);

// 2-Modificador: private
class SchollBoyTwo {
  codeSchollBoyTwo: number;
  nameSchollBoyTwo: string;
  private ageSchollBoyTwo: number;

  constructor(
    codeSchollBoyTwo: number,
    nameSchollBoyTwo: string,
    ageSchollBoyTwo: number
  ) {
    this.codeSchollBoyTwo = codeSchollBoyTwo;
    this.nameSchollBoyTwo = nameSchollBoyTwo;
    this.ageSchollBoyTwo = ageSchollBoyTwo;
  }

  returnDataSchollBoy() {
    return `Código do Aluno...: ${this.codeSchollBoyTwo}.
      Nome do Estudante...: ${this.nameSchollBoyTwo}.
      Idade do Estudante...: ${this.ageSchollBoyTwo}`;
  }
}
const schollBoyTwo = new SchollBoyTwo(98765, "Bruno Mendonça", 27);
console.log(schollBoyTwo.returnDataSchollBoy());

// 3-Modificador: protected
class SchollBoyThree {
  codeSchollBoyThree: number;
  protected nameSchollBoyThree: string;

  constructor(codeSchollBoyThree: number, nameSchollBoyThree: string) {
    this.codeSchollBoyThree = codeSchollBoyThree;
    this.nameSchollBoyThree = nameSchollBoyThree;
  }
}

class OhterPerson extends SchollBoyThree {
  private course: string;

  constructor(
    codeSchollBoyThree: number,
    nameSchollBoythree: string,
    course: string
  ) {
    super(codeSchollBoyThree, nameSchollBoythree);
    this.course = course;
  }

  returnData() {
    return `Código do Aluno: ${this.codeSchollBoyThree}.
    Nome do Estudante: ${this.nameSchollBoyThree}.
    Matéria: ${this.course}`;
  }
}

const schollBoyThree = new OhterPerson(783212, "Bruno Mendonça", "Matemática");
console.log(schollBoyThree.returnData());
