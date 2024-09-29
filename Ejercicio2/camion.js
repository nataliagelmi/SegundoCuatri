"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    //  me crea las instancias.
    function Camion(marca, modelo, anio, capacidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.capacidad = capacidad;
    }
    //getter
    Camion.prototype.getMarca = function () {
        return this.marca;
    };
    Camion.prototype.getModelo = function () {
        return this.modelo;
    };
    Camion.prototype.getAnio = function () {
        return this.anio;
    };
    Camion.prototype.getCapacidad = function () {
        return this.capacidad;
    };
    // setters   
    Camion.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camion.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Camion.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    Camion.prototype.setCapacidad = function (cantPuertas) {
        this.capacidad = cantPuertas;
    };
    return Camion;
}());
exports.Camion = Camion;
