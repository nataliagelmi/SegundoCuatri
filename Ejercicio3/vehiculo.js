"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehiculo = void 0;
var vehiculo = /** @class */ (function () {
    //  me crea las instancias.
    function vehiculo(dominio, marca, modelo, anio) {
        this.dominio = dominio;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    //getter
    vehiculo.prototype.getDominio = function () {
        return this.dominio;
    };
    vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    // setters   
    vehiculo.prototype.setDominio = function (dominio) {
        if (dominio && dominio.trim() !== '') { // Verifico que no esté vacío
            this.dominio = dominio;
        }
    };
    vehiculo.prototype.setMarca = function (marca) {
        if (marca && marca.trim() !== '') { // Verifico que no esté vacío
            this.marca = marca;
        }
    };
    vehiculo.prototype.setModelo = function (modelo) {
        if (modelo && modelo.trim() !== '') { // Verifico que no esté vacío
            this.modelo = modelo;
        }
    };
    vehiculo.prototype.setAnio = function (anio) {
        var anioActual = new Date().getFullYear();
        if (anio >= 1900 && anio <= anioActual) { // Verifico que sea un año válido
            this.anio = anio;
        }
    };
    return vehiculo;
}());
exports.vehiculo = vehiculo;
