//1-Get
class Square {
  private _width: number = 6;
  private _height: number = 12;

  get calculateSquare() {
    return this._width * this._height;
  }
}
console.log(new Square().calculateSquare);

//2-Set
class NewPerson {
  name: string;

  returnNamePerson(setNamePerson: string) {
    this.name = setNamePerson;
  }
}
const person = new NewPerson();
person.returnNamePerson("Bruno Mendonça");
console.log("Meu nome é...: ", person.name);

//3-Get [explicação mais densa]
class CodeStudentOne {
  private _name = "Bruno Mendonça";
  private _semester: number;
  private _course: string;

  public get nameStudent() {
    return this._name;
  }
}
const codeStudent = new CodeStudentOne();
const resultName = codeStudent.nameStudent;
console.log(resultName);

//4-Set/Get [explicação mais densa]
class CodeStudentTwo {
  name: string;
  semester: number;
  course: string;

  constructor(
    nameCodeStudent: string,
    semerterCodeStudent: number,
    courseCodeStudent: string
  ) {
    this.name = nameCodeStudent;
    this.semester = semerterCodeStudent;
    this.course = courseCodeStudent;
  }

  public get courses() {
    return this.course;
  }

  public set courses(setCourses: string) {
    this.course = setCourses;
  }
}

const codeStudentOne = new CodeStudentTwo("Bruno", 5, "Eng. de Software");
console.log(codeStudentOne);

// Setter call
codeStudentOne.course = "Análise e Desenvolvimento de Sistemas";

// Getter call
console.log("Curso atualizado...:", codeStudentOne.course);
