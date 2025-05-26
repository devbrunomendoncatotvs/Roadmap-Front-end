var Sum = /** @class */ (function () {
    function Sum(numY, numX) {
        this.x = numX;
        this.y = numY;
    }
    Sum.prototype.sumNumbers = function () {
        return this.x + this.y;
    };
    return Sum;
}());
var sum = new Sum(10, 6);
console.log(sum.sumNumbers);
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.nameCompleted = function () {
        return "".concat(this.name, " ").concat(this.surname);
    };
    return Person;
}());
var pessoa = new Person("Bruno", "Mendonça");
//console.log(pessoa.nameCompleted());
// ==> Exemplo 02 - Classes (sem constructor)
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
// Criar um objeto ou a instancia
var student = new Student();
// Inicializar o objeto:
student.codeStudent = 8967;
student.nameStudent = "Bruno Mendonça";
// Acessar os campos:
//console.log("Código do Estudante...: " + student.codeStudent);
//console.log("Nome do Estudante...: " + student.nameStudent);
// ==> Exemplo 03 - Classes (com constructor)
var StudentOne = /** @class */ (function () {
    // Definir o Construtor
    function StudentOne(codeStudent, nameStudent) {
        this.codeStudent = codeStudent;
        this.nameStudent = nameStudent;
    }
    // Criar o método
    StudentOne.prototype.listarEstudante = function () {
        console.log("Código do Estudante...: " + this.codeStudent);
        console.log("Nome do Estudante...: " + this.nameStudent);
    };
    return StudentOne;
}());
// Acessar os campos:
var studentOne = new StudentOne(9845, "Prince Lemos");
/*console.log(
  "Lendo o atributo Código do Estudante...: " + studentOne.codeStudent
);*/
//console.log("Lendo o atributo Nome do Estudante...: " + studentOne.nameStudent);
