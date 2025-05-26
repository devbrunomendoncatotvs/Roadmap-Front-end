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
// ==> Exemplo 01- Modificador: public
var SchollBoyOne = /** @class */ (function () {
    function SchollBoyOne() {
    }
    return SchollBoyOne;
}());
var schollBoyOne = new SchollBoyOne();
schollBoyOne.codeSchollBoy = 201;
schollBoyOne.nameSchollBoy = "Bruno Mendonça";
console.log(schollBoyOne.codeSchollBoy);
console.log(schollBoyOne.nameSchollBoy);
// ==> Exemplo 02 - Modificador: private
var SchollBoyTwo = /** @class */ (function () {
    function SchollBoyTwo(codeSchollBoyTwo, nameSchollBoyTwo, ageSchollBoyTwo) {
        this.codeSchollBoyTwo = codeSchollBoyTwo;
        this.nameSchollBoyTwo = nameSchollBoyTwo;
        this.ageSchollBoyTwo = ageSchollBoyTwo;
    }
    SchollBoyTwo.prototype.returnDataSchollBoy = function () {
        return "C\u00F3digo do Aluno...: ".concat(this.codeSchollBoyTwo, ".\n      Nome do Estudante...: ").concat(this.nameSchollBoyTwo, ".\n      Idade do Estudante...: ").concat(this.ageSchollBoyTwo);
    };
    return SchollBoyTwo;
}());
var schollBoyTwo = new SchollBoyTwo(98765, "Bruno Mendonça", 27);
console.log(schollBoyTwo.returnDataSchollBoy());
// ==> Exemplo 03 - Modificador: protected
var SchollBoyThree = /** @class */ (function () {
    function SchollBoyThree(codeSchollBoyThree, nameSchollBoyThree) {
        this.codeSchollBoyThree = codeSchollBoyThree;
        this.nameSchollBoyThree = nameSchollBoyThree;
    }
    return SchollBoyThree;
}());
var OhterPerson = /** @class */ (function (_super) {
    __extends(OhterPerson, _super);
    function OhterPerson(codeSchollBoyThree, nameSchollBoythree, course) {
        var _this = _super.call(this, codeSchollBoyThree, nameSchollBoythree) || this;
        _this.course = course;
        return _this;
    }
    OhterPerson.prototype.returnData = function () {
        return "C\u00F3digo do Aluno: ".concat(this.codeSchollBoyThree, ".\n    Nome do Estudante: ").concat(this.nameSchollBoyThree, ".\n    Mat\u00E9ria: ").concat(this.course);
    };
    return OhterPerson;
}(SchollBoyThree));
var schollBoyThree = new OhterPerson(783212, "Bruno Mendonça", "Matemática");
console.log(schollBoyThree.returnData());
