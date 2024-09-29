"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(seccionId) {
        this.listAutos = [];
        this.listCamion = [];
        this.listMoto = [];
        this.seccionId = seccionId;
    }
    // Métodos para agregar vehículos
    RegistroAutomotor.prototype.agregarVehiculo = function (tipo, vehiculo) {
        if (tipo === 'auto') {
            this.listAutos.push(vehiculo);
        }
        else if (tipo === 'camion') {
            this.listCamion.push(vehiculo);
        }
        else if (tipo === 'moto') {
            this.listMoto.push(vehiculo);
        }
    };
    // Métodos para modificar vehículos
    RegistroAutomotor.prototype.modificarVehiculo = function (tipo, index, vehiculo) {
        if (tipo === 'auto' && index >= 0 && index < this.listAutos.length) {
            this.listAutos[index] = vehiculo;
        }
        else if (tipo === 'camion' && index >= 0 && index < this.listCamion.length) {
            this.listCamion[index] = vehiculo;
        }
        else if (tipo === 'moto' && index >= 0 && index < this.listMoto.length) {
            this.listMoto[index] = vehiculo;
        }
    };
    // Métodos para dar de baja vehículos
    RegistroAutomotor.prototype.darDeBajaVehiculo = function (tipo, index) {
        if (tipo === 'auto' && index >= 0 && index < this.listAutos.length) {
            this.listAutos.splice(index, 1);
        }
        else if (tipo === 'camion' && index >= 0 && index < this.listCamion.length) {
            this.listCamion.splice(index, 1);
        }
        else if (tipo === 'moto' && index >= 0 && index < this.listMoto.length) {
            this.listMoto.splice(index, 1);
        }
    };
    // para obtener listas de vehículos
    RegistroAutomotor.prototype.getVehiculos = function (tipo) {
        if (tipo === 'auto') {
            return this.listAutos;
        }
        else if (tipo === 'camion') {
            return this.listCamion;
        }
        else {
            return this.listMoto;
        }
    };
    // Métodos para el ID de sección
    RegistroAutomotor.prototype.getSeccionId = function () {
        return this.seccionId;
    };
    RegistroAutomotor.prototype.setSeccionId = function (seccionId) {
        this.seccionId = seccionId;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
