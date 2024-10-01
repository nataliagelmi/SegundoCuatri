"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    //  me crea las instancias.
    function Camion(dominio, marca, modelo, anio, capacidad) {
        this.dominio = dominio;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.capacidad = capacidad;
    }
    //getter
    Camion.prototype.getDominio = function () {
        return this.dominio;
    };
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
    Camion.prototype.setDominio = function (dominio) {
        if (dominio && dominio.trim() !== '') { // Verifico que no esté vacío
            this.dominio = dominio;
        }
    };
    Camion.prototype.setMarca = function (marca) {
        if (marca && marca.trim() !== '') { // Verifico que no esté vacío
            this.marca = marca;
        }
    };
    Camion.prototype.setModelo = function (modelo) {
        if (modelo && modelo.trim() !== '') { // Verifico que no esté vacío
            this.modelo = modelo;
        }
    };
    Camion.prototype.setAnio = function (anio) {
        var anioActual = new Date().getFullYear();
        if (anio >= 1900 && anio <= anioActual) { // Verifico que sea un año válido
            this.anio = anio;
        }
    };
    Camion.prototype.setCapacidad = function (capacidad) {
        if (capacidad > 0) { // Verifica que la capacidad sea positiva
            this.capacidad = capacidad;
        }
    };
    return Camion;
}());
exports.Camion = Camion;
