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
exports.Moto = void 0;
var vehiculo_1 = require("./vehiculo");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    //  me crea las instancias.
    function Moto(dominio, marca, modelo, anio, cilindrada) {
        var _this = _super.call(this, dominio, marca, modelo, anio) || this;
        _this.cilindrada = cilindrada;
        ;
        return _this;
    }
    //getter
    Moto.prototype.getCilindrada = function () {
        return this.cilindrada;
    };
    // setters   
    Moto.prototype.setCilindrada = function (cilindrada) {
        if (cilindrada > 0) { // Verifico que la cilindrada sea >0 
            this.cilindrada = cilindrada;
        }
    };
    return Moto;
}(vehiculo_1.vehiculo));
exports.Moto = Moto;
