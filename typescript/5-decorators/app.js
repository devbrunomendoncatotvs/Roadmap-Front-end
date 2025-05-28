var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// 1-lass Decorator
function Logger(construtor) {
    console.log("Classe carregada:", construtor.name);
}
var Personn = function () {
    var _classDecorators = [Logger];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Personn = _classThis = /** @class */ (function () {
        function Personn_1(nome) {
            this.nome = nome;
        }
        return Personn_1;
    }());
    __setFunctionName(_classThis, "Personn");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Personn = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Personn = _classThis;
}();
// 2-Property Decorator
function logPropriedade(target, key) {
    console.log("Propriedade: ".concat(key));
}
var Product = function () {
    var _a;
    var _nome_decorators;
    var _nome_initializers = [];
    var _nome_extraInitializers = [];
    return _a = /** @class */ (function () {
            function Product() {
                this.nome = __runInitializers(this, _nome_initializers, "");
                __runInitializers(this, _nome_extraInitializers);
            }
            return Product;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _nome_decorators = [logPropriedade];
            __esDecorate(null, null, _nome_decorators, { kind: "field", name: "nome", static: false, private: false, access: { has: function (obj) { return "nome" in obj; }, get: function (obj) { return obj.nome; }, set: function (obj, value) { obj.nome = value; } }, metadata: _metadata }, _nome_initializers, _nome_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
// 3-Method Decorator
function logMetodo(target, key, descriptor) {
    var metodoOriginal = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("M\u00E9todo chamado: ".concat(key));
        return metodoOriginal.apply(this, args);
    };
}
var Calculadora = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _somar_decorators;
    return _a = /** @class */ (function () {
            function Calculadora() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            Calculadora.prototype.somar = function (a, b) {
                return a + b;
            };
            return Calculadora;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _somar_decorators = [logMetodo];
            __esDecorate(_a, null, _somar_decorators, { kind: "method", name: "somar", static: false, private: false, access: { has: function (obj) { return "somar" in obj; }, get: function (obj) { return obj.somar; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
// 4-Accessor Decorator (getter/setter)
function logAcesso(target, key, descriptor) {
    var original = descriptor.get;
    descriptor.get = function () {
        console.log("Acessando: ".concat(key));
        return original.call(this);
    };
}
var Conta = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _get_saldo_decorators;
    return _a = /** @class */ (function () {
            function Conta() {
                this.saldoInterno = (__runInitializers(this, _instanceExtraInitializers), 100);
            }
            Object.defineProperty(Conta.prototype, "saldo", {
                get: function () {
                    return this.saldoInterno;
                },
                enumerable: false,
                configurable: true
            });
            return Conta;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _get_saldo_decorators = [logAcesso];
            __esDecorate(_a, null, _get_saldo_decorators, { kind: "getter", name: "saldo", static: false, private: false, access: { has: function (obj) { return "saldo" in obj; }, get: function (obj) { return obj.saldo; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
// 5-Parameter Decorator
function logParametro(target, methodName, index) {
    console.log("Par\u00E2metro decorado no m\u00E9todo ".concat(methodName, ", \u00EDndice ").concat(index));
}
var Teste = /** @class */ (function () {
    function Teste() {
    }
    Teste.prototype.imprimir = function (valor) {
        console.log(valor);
    };
    return Teste;
}());
