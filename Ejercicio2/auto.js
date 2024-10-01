"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    //  me crea las instancias.
    function Auto(dominio, marca, modelo, anio, cantPuertas) {
        this.dominio = dominio;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.cantPuertas = cantPuertas;
    }
    //getter
    Auto.prototype.getDominio = function () {
        return this.dominio;
    };
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
    Auto.prototype.setDominio = function (dominio) {
        if (dominio && dominio.trim() !== '') { // Verifico que no esté vacío
            this.dominio = dominio;
        }
    };
    Auto.prototype.setMarca = function (marca) {
        if (marca && marca.trim() !== '') { // Verifico que no esté vacío
            this.marca = marca;
        }
    };
    Auto.prototype.setModelo = function (modelo) {
        if (modelo && modelo.trim() !== '') { // Verifico que no esté vacío
            this.modelo = modelo;
        }
    };
    Auto.prototype.setAnio = function (anio) {
        var anioActual = new Date().getFullYear();
        if (anio >= 1900 && anio <= anioActual) { // Verifico que sea un año válido
            this.anio = anio;
        }
    };
    Auto.prototype.setCantPuertas = function (cantPuertas) {
        if (cantPuertas > 0 && cantPuertas >= 5) { // Verifico que la cantidad de puertas sea >0 y menor a 5
            this.cantPuertas = cantPuertas;
        }
    };
    return Auto;
}());
exports.Auto = Auto;
