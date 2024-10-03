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
exports.Camion = void 0;
var vehiculo_1 = require("./vehiculo");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    //  me crea las instancias.
    function Camion(dominio, marca, modelo, anio, capacidad) {
        var _this = _super.call(this, dominio, marca, modelo, anio) || this; // tengo que tener en cuenta el orden!
        _this.capacidad = capacidad;
        return _this;
    }
    //getter
    Camion.prototype.getCapacidad = function () {
        return this.capacidad;
    };
    // setters   
    Camion.prototype.setCapacidad = function (capacidad) {
        if (capacidad > 0) { // Verifica que la capacidad sea positiva
            this.capacidad = capacidad;
        }
    };
    return Camion;
}(vehiculo_1.vehiculo));
exports.Camion = Camion;
