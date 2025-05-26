// ==> Exemplo 01
var EmployeeOne = /** @class */ (function () {
    function EmployeeOne(dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
    return EmployeeOne;
}());
var employee = new EmployeeOne(new Date(1998, 5, 19));
// ==> Exemplo 02
var EmployeeTwo = /** @class */ (function () {
    function EmployeeTwo(dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        this.dateOfBirth = dateOfBirth;
    }
    return EmployeeTwo;
}());
// ==> Exemplo 03
var EmployeeThree = /** @class */ (function () {
    function EmployeeThree(name, code) {
        this.codeEmployee = code;
        this.name = name;
    }
    return EmployeeThree;
}());
var func = new EmployeeThree("Bruno", 112233);
func.name = "Bruno Mendonça";
console.log(func);
var EnployeeOne = {
    codeEmployee: 506699,
    nameEmployee: "Marcia",
};
var EnployeeTwo = {
    codeEmployee: 506699,
    nameEmployee: "Bruno",
};
EnployeeTwo.codeEmployee = 887653;
EnployeeTwo.nameEmployee = "Mendonça";
