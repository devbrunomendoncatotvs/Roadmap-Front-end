// 1-Propriedades Estáticas
var OtherEmployeeOne = /** @class */ (function () {
    function OtherEmployeeOne(name, surname, title) {
        this.name = name;
        this.surname = surname;
        this.title = title;
        // nome classe + nome propriedade
        OtherEmployeeOne.hiring++;
    }
    OtherEmployeeOne.hiring = 0;
    return OtherEmployeeOne;
}());
var otherEmployeeOne = new OtherEmployeeOne("Bruno", "Mendonça", "Developer");
var otherEmployeeTwo = new OtherEmployeeOne("Maria", "Santos", "Developer");
console.log(OtherEmployeeOne.hiring);
// 2-Métodos estáticos
var OtherEmployeeTwo = /** @class */ (function () {
    function OtherEmployeeTwo(name, surname, title) {
        this.name = name;
        this.surname = surname;
        this.title = title;
        OtherEmployeeTwo.hiring++;
    }
    OtherEmployeeTwo.returnHiring = function () {
        return OtherEmployeeTwo.hiring;
    };
    OtherEmployeeTwo.hiring = 0;
    return OtherEmployeeTwo;
}());
var otherEmployeeThree = new OtherEmployeeTwo("Bruno", "Mendonça", "Front-end Developer");
var otherEmployeeFour = new OtherEmployeeTwo("Bruno", "Belo", "Personal");
console.log(OtherEmployeeTwo.returnHiring());
var OtherDog = /** @class */ (function () {
    function OtherDog(name, age, races) {
        this.name = name;
        this.age = age;
        this.races = races;
        OtherDog.QTD_CACHORRO_SOLD++;
        console.log(OtherDog.QTD_CACHORRO_SOLD);
    }
    OtherDog.prototype.displayInformation = function () {
        console.log("O cachorro ".concat(this.name, " tem ").concat(this.age, "."));
    };
    OtherDog.QTD_CACHORRO_SOLD = 0;
    return OtherDog;
}());
var cachorro_01 = new OtherDog("Pipoca", 4, ["Spitz Alemão"]);
var cachorro_02 = new OtherDog("Farofa", 6, ["Yorkshire"]);
