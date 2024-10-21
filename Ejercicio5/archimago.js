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
exports.ArchiMago = void 0;
var mago_1 = require("./mago");
var ArchiMago = /** @class */ (function (_super) {
    __extends(ArchiMago, _super);
    function ArchiMago(nombre, puntosDeVida, poder_magico, super_poder) {
        var _this = _super.call(this, nombre, puntosDeVida, poder_magico) || this;
        _this.super_poder = super_poder;
        return _this;
    }
    // este personaje tiene un poder super demoledor :)
    ArchiMago.prototype.hechizoDemoledor = function () {
        if (this.super_poder != " ") {
            console.log("".concat(this.nombre, " hechizo a ejecutar ").concat(this.super_poder));
        }
        else {
            console.log("".concat(this.nombre, " no tiene Super poder."));
        }
    };
    // este esta mejorado del heredado del mago.
    ArchiMago.prototype.lanzarHechizo = function () {
        if (this.poder_magico > 15) {
            console.log("".concat(this.nombre, " lanza un hechizo mejorado."));
            this.poder_magico -= 5; // es mas potente pero se debilita mas rapido
        }
        else {
            console.log("".concat(this.nombre, " no tiene suficiente poder."));
        }
    };
    return ArchiMago;
}(mago_1.Mago));
exports.ArchiMago = ArchiMago;
