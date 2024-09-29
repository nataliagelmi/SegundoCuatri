"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    //  me crea las instancias.
    function Auto(marca, modelo, anio, cantPuertas) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.cantPuertas = cantPuertas;
    }
    //getter
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getAnio = function () {
        return this.anio;
    };
    Auto.prototype.getCantPuertas = function () {
        return this.cantPuertas;
    };
    // setters   
    Auto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Auto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Auto.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    Auto.prototype.setCantPuertas = function (cantPuertas) {
        this.cantPuertas = cantPuertas;
    };
    return Auto;
}());
exports.Auto = Auto;
