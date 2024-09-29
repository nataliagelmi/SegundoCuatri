"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculos = void 0;
// Clase Vehiculos
var Vehiculos = /** @class */ (function () {
    function Vehiculos() {
        this.listAutos = [];
        this.listMotos = [];
        this.listCamiones = [];
    }
    Vehiculos.prototype.agregarAuto = function (auto) {
        this.listAutos.push(auto);
    };
    Vehiculos.prototype.modificarAuto = function (index, auto) {
        this.listAutos[index] = auto;
    };
    Vehiculos.prototype.bajarAuto = function (index) {
        this.listAutos.splice(index, 1);
    };
    Vehiculos.prototype.agregarMoto = function (moto) {
        this.listMotos.push(moto);
    };
    Vehiculos.prototype.modificarMoto = function (index, moto) {
        this.listMotos[index] = moto;
    };
    Vehiculos.prototype.bajarMoto = function (index) {
        this.listMotos.splice(index, 1);
    };
    Vehiculos.prototype.agregarCamion = function (camion) {
        this.listCamiones.push(camion);
    };
    Vehiculos.prototype.modificarCamion = function (index, camion) {
        this.listCamiones[index] = camion;
    };
    Vehiculos.prototype.bajarCamion = function (index) {
        this.listCamiones.splice(index, 1);
    };
    return Vehiculos;
}());
exports.Vehiculos = Vehiculos;
