"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    //  me crea las instancias.
    function Moto(dominio, marca, modelo, anio, cilindrada) {
        this.dominio = dominio;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.cilindrada = cilindrada;
    }
    //getter
    Moto.prototype.getDominio = function () {
        return this.dominio;
    };
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
    Moto.prototype.setDominio = function (dominio) {
        if (dominio && dominio.trim() !== '') { // Verifico que no esté vacío
            this.dominio = dominio;
        }
    };
    Moto.prototype.setMarca = function (marca) {
        if (marca && marca.trim() !== '') { // Verifico que no esté vacío
            this.marca = marca;
        }
    };
    Moto.prototype.setModelo = function (modelo) {
        if (modelo && modelo.trim() !== '') { // Verifico que no esté vacío
            this.modelo = modelo;
        }
    };
    Moto.prototype.setAnio = function (anio) {
        var anioActual = new Date().getFullYear();
        if (anio >= 1900 && anio <= anioActual) { // Verifico que sea un año válido
            this.anio = anio;
        }
    };
    Moto.prototype.setCilindrada = function (cilindrada) {
        if (cilindrada > 0) { // Verifico que la cilindrada sea >0 
            this.cilindrada = cilindrada;
        }
    };
    return Moto;
}());
exports.Moto = Moto;
