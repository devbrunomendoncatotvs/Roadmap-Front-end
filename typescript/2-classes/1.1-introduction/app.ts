class Person {
  name: string;
  surname: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  nameCompleted(): string {
    return `${this.name} ${this.surname}`;
  }
}
const pessoa = new Person("Bruno", "Mendonça");
console.log(pessoa.nameCompleted());

// 2-Classes (sem constructor)
class Student {
  codeStudent: number;
  nameStudent: string;
}

// Criar um objeto ou a instancia
const student = new Student();

// Inicializar o objeto:
student.codeStudent = 8967;
student.nameStudent = "Bruno Mendonça";

// Acessar os campos:
//console.log("Código do Estudante...: " + student.codeStudent);
//console.log("Nome do Estudante...: " + student.nameStudent);

// 3-Classes (com constructor)
class StudentOne {
  codeStudent: number;
  nameStudent: string;

  // Definir o Construtor
  constructor(codeStudent: number, nameStudent: string) {
    this.codeStudent = codeStudent;
    this.nameStudent = nameStudent;
  }

  // Criar o método
  listarEstudante(): void {
    console.log("Código do Estudante...: " + this.codeStudent);
    console.log("Nome do Estudante...: " + this.nameStudent);
  }
}
