//==>Exemplo 01: Get
var Square = /** @class */ (function () {
    function Square() {
        this._width = 6;
        this._height = 12;
    }
    Object.defineProperty(Square.prototype, "calculateSquare", {
        get: function () {
            return this._width * this._height;
        },
        enumerable: false,
        configurable: true
    });
    return Square;
}());
console.log(new Square().calculateSquare);
//==> Exemplo 02: Set
var NewPerson = /** @class */ (function () {
    function NewPerson() {
    }
    NewPerson.prototype.returnNamePerson = function (setNamePerson) {
        this.name = setNamePerson;
    };
    return NewPerson;
}());
var person = new NewPerson();
person.returnNamePerson("Bruno Mendonça");
console.log("Meu nome é...: ", person.name);
//==>Exemplo 03: Get [explicação mais densa]
var CodeStudentOne = /** @class */ (function () {
    function CodeStudentOne() {
        this._name = "Bruno Mendonça";
    }
    Object.defineProperty(CodeStudentOne.prototype, "nameStudent", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return CodeStudentOne;
}());
var codeStudent = new CodeStudentOne();
var resultName = codeStudent.nameStudent;
console.log(resultName);
//==>Exemplo 04: Set/Get [explicação mais densa]
var CodeStudentTwo = /** @class */ (function () {
    function CodeStudentTwo(nameCodeStudent, semerterCodeStudent, courseCodeStudent) {
        this.name = nameCodeStudent;
        this.semester = semerterCodeStudent;
        this.course = courseCodeStudent;
    }
    Object.defineProperty(CodeStudentTwo.prototype, "courses", {
        get: function () {
            return this.course;
        },
        set: function (setCourses) {
            this.course = setCourses;
        },
        enumerable: false,
        configurable: true
    });
    return CodeStudentTwo;
}());
var codeStudentOne = new CodeStudentTwo("Bruno", 5, "Eng. de Software");
console.log(codeStudentOne);
// Setter call
codeStudentOne.course = "Análise e Desenvolvimento de Sistemas";
// Getter call
console.log("Curso atualizado...:", codeStudentOne.course);
