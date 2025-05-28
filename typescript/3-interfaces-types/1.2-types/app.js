var item = {
    nome: "Notebook",
    preco: 3500,
    emEstoque: true,
};
var usuarioId;
usuarioId = 123; // OK
usuarioId = "abc123"; // OK
var maria = {
    nome: "Maria",
    cargo: "Desenvolvedora",
};
var ponto = [10, 20];
var somar = function (x, y) { return x + y; };
var mover = function (direcao) {
    //  console.log(`Movendo para ${direcao}`);
};
mover("norte");
var config = {
    tema: "escuro",
    versao: 1.2,
};
var userOne = { nome: "Ana" };
var userTwo = { nome: "Pedro", idade: 25 };
function exibirTipo(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Argumentos inválidos! Ambos os argumentos devem ser do tipo (umber) ou (string)");
}
console.log(exibirTipo(5, 10));
// 10-Type Guard: typeof
var Car = /** @class */ (function () {
    function Car(name, mark) {
        this.name = name;
        this.mark = mark;
    }
    return Car;
}());
var Motorcycle = /** @class */ (function () {
    function Motorcycle(name, year) {
        this.name = name;
        this.year = year;
    }
    return Motorcycle;
}());
var Bike = /** @class */ (function () {
    function Bike(name, mark) {
        this.name = name;
        this.mark = mark;
    }
    return Bike;
}());
function detailsVehicle(vehicle) {
    if (vehicle instanceof Car) {
        return "O nome do ve\u00EDculo \u00E9 (".concat(vehicle.name, ") e a sua marca \u00E9 (").concat(vehicle.mark, ")");
    }
    else if (vehicle instanceof Motorcycle) {
        return "O nome do ve\u00EDculo \u00E9 (".concat(vehicle.name, ") e seu ano \u00E9 (").concat(vehicle.year, ")");
    }
    else {
        return 'O tipo de veiculo mencionado não pode ser indentificado!';
    }
}
var newCar = new Car('Civic', 'Honda');
var newBike = new Bike('Aro 29', 'Caloi');
var Cow = /** @class */ (function () {
    function Cow(typeAnimal, colorGrow) {
        this.typeAnimal = typeAnimal;
        this.colorCow = colorGrow;
    }
    return Cow;
}());
var Fish = /** @class */ (function () {
    function Fish(typeAnimal, colorFish) {
        this.typeAnimal = typeAnimal;
        this.colorFish = colorFish;
    }
    return Fish;
}());
function eatWeeds(typeAnimal) {
    console.log("O tipo do animal \u00E9 ".concat(typeAnimal, " e ele est\u00E1 comendo mato"));
}
function swim(typeAnimal) {
    console.log("O tipo do animal \u00E9 ".concat(typeAnimal, " e ele est\u00E1 nadando"));
}
function indentifyAnimal(typeAnimal) {
    if ('colorCow' in typeAnimal) {
        eatWeeds(typeAnimal.typeAnimal);
    }
    else if ('colorFish' in typeAnimal) {
        swim(typeAnimal.typeAnimal);
    }
}
indentifyAnimal(new Cow('Vaca', 'Branca com pintas pretas'));
indentifyAnimal(new Fish('Tucúnare', 'Azulão'));
var indentificarSom = function (som) {
    if ("falar" in som) {
        return som.falar;
    }
    return som.latir;
};
