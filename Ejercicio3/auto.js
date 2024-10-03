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
exports.Auto = void 0;
var vehiculo_1 = require("./vehiculo");
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    //  me crea las instancias.
    function Auto(dominio, marca, modelo, anio, cantPuertas) {
        var _this = _super.call(this, dominio, marca, modelo, anio) || this;
        _this.cantPuertas = cantPuertas;
        return _this;
    }
    //getter
    Auto.prototype.getCantPuertas = function () {
        return this.cantPuertas;
    };
    // setters   
    Auto.prototype.setCantPuertas = function (cantPuertas) {
        if (cantPuertas > 0 && cantPuertas >= 5) { // Verifico que la cantidad de puertas sea >0 y menor a 5
            this.cantPuertas = cantPuertas;
        }
    };
    return Auto;
}(vehiculo_1.vehiculo));
exports.Auto = Auto;
