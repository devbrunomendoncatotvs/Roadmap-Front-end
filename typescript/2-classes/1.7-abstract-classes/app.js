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
var Clerk = /** @class */ (function () {
    function Clerk(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Object.defineProperty(Clerk.prototype, "returnNameClompleted", {
        get: function () {
            return "".concat(this.name, " ").concat(this.surname);
        },
        enumerable: false,
        configurable: true
    });
    Clerk.prototype.issueCounterCheck = function () {
        return "".concat(this.returnNameClompleted, " - Sal\u00E1rio: ").concat(this.returnWage());
    };
    return Clerk;
}());
var ClerkCLT = /** @class */ (function (_super) {
    __extends(ClerkCLT, _super);
    function ClerkCLT(name, surname, wage) {
        var _this = _super.call(this, name, surname) || this;
        _this.wage = wage;
        return _this;
    }
    ClerkCLT.prototype.returnWage = function () {
        return this.wage;
    };
    return ClerkCLT;
}(Clerk));
var ClerkPJ = /** @class */ (function (_super) {
    __extends(ClerkPJ, _super);
    function ClerkPJ(name, surname, valueHour, hoursWorked) {
        var _this = _super.call(this, name, surname) || this;
        _this.valueHour = valueHour;
        _this.hoursWorked = hoursWorked;
        return _this;
    }
    ClerkPJ.prototype.returnWage = function () {
        return this.valueHour * this.hoursWorked;
    };
    return ClerkPJ;
}(Clerk));
var bruno = new ClerkCLT("Bruno", "Mendonça", 18000);
var joao = new ClerkPJ("João", "Silva", 150, 160);
console.log(bruno.issueCounterCheck());
console.log(joao.issueCounterCheck());
