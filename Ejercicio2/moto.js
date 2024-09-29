"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    //  me crea las instancias.
    function Moto(marca, modelo, anio, cilindrada) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.cilindrada = cilindrada;
    }
    //getter
    Moto.prototype.getMarca = function () {
        return this.marca;
    };
    Moto.prototype.getModelo = function () {
        return this.modelo;
    };
    Moto.prototype.getAnio = function () {
        return this.anio;
    };
    Moto.prototype.getCilindrada = function () {
        return this.cilindrada;
    };
    // setters   
    Moto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Moto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Moto.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    Moto.prototype.setCilindrada = function (cilindrada) {
        this.cilindrada = cilindrada;
    };
    return Moto;
}());
exports.Moto = Moto;
