var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ==> Exemplo 01
var NewAnimal = /** @class */ (function () {
    function NewAnimal() {
    }
    NewAnimal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Animal se moveu...: ".concat(distance, " metros."));
    };
    return NewAnimal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Au, Au!");
    };
    return Dog;
}(NewAnimal));
var cachorro = new Dog();
cachorro.bark();
cachorro.move(10);
cachorro.bark();
// ==> Exemplo 02
var OtherPerson = /** @class */ (function () {
    function OtherPerson(name, surname) {
        this.name = name;
        this.surname = surname;
        this.name = name;
        this.surname = surname;
    }
    OtherPerson.prototype.returnNameCompletedOne = function () {
        return "".concat(this.name, " ").concat(this.surname);
    };
    OtherPerson.prototype.toPresentPerson = function () {
        return "Meu nome \u00E9 ".concat(this.name, " ").concat(this.surname, ".");
    };
    return OtherPerson;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, surname, func) {
        var _this = _super.call(this, name, surname) || this;
        _this.func = func;
        return _this;
    }
    Employee.prototype.returnNameCompletedTwo = function () {
        return _super.prototype.toPresentPerson.call(this) + "E, sou ".concat(this.func);
    };
    return Employee;
}(OtherPerson));
var newEmployee = new Employee("Bruno", "Mendonça", "Full-stack Developer");
console.log(newEmployee.toPresentPerson());
console.log(newEmployee.returnNameCompletedOne());
console.log(newEmployee.returnNameCompletedTwo());
