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
exports.Arquero = void 0;
var personaje_1 = require("./personaje");
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero(nombre, puntosDeVida, cant_flechas) {
        var _this = _super.call(this, nombre, puntosDeVida) || this;
        _this.cant_flechas = cant_flechas;
        return _this;
    }
    Arquero.prototype.dispararFlecha = function () {
        if (this.cant_flechas > 0) {
            console.log("".concat(this.nombre, " dispara una flecha."));
            this.cant_flechas--;
        }
        else {
            console.log("".concat(this.nombre, " no tiene m\u00E1s flechas."));
        }
    };
    return Arquero;
}(personaje_1.Personaje));
exports.Arquero = Arquero;
