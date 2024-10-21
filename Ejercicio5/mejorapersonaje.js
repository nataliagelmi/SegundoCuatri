"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mejorado = void 0;
var personaje_1 = require("./personaje");
var Mejorado = /** @class */ (function (_super) {
    __extends(Mejorado, _super);
    function Mejorado() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.habilidades = [];
        return _this;
    }
    Mejorado.prototype.aprenderHabilidad = function (nuevaHabilidad) {
        this.habilidades.push(nuevaHabilidad);
        console.log("".concat(this.nombre, " ha aprendido la habilidad: ").concat(nuevaHabilidad));
    };
    Mejorado.prototype.usarHabilidad = function (habilidad) {
        if (this.habilidades.includes(habilidad)) {
            console.log("".concat(this.nombre, " usa la habilidad: ").concat(habilidad));
        }
        else {
            console.log("".concat(this.nombre, " no conoce la habilidad: ").concat(habilidad));
        }
    };
    return Mejorado;
}(personaje_1.Personaje));
exports.Mejorado = Mejorado;
