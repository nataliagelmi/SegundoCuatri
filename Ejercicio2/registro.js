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
    // Método para buscar un camión por dominio y modificar su capacidad
    RegistroAutomotor.prototype.modificarCapacidadCamion = function (dominio, nuevaCapacidad) {
        var camion = this.listCamion.find(function (c) { return c.getDominio() === dominio; });
        if (camion) {
            camion.setCapacidad(nuevaCapacidad); //  modificar la capacidad
            console.log("La capacidad del cami\u00F3n con dominio ".concat(dominio, " ha sido actualizada a ").concat(nuevaCapacidad, "."));
        }
        else {
            console.log("No se encontr\u00F3 un cami\u00F3n con el dominio ".concat(dominio, "."));
        }
    };
    // Método para buscar una moto por dominio y modificar su cilindrada
    RegistroAutomotor.prototype.modificarCilindradaMoto = function (dominio, nuevaCilindrada) {
        var moto = this.listMoto.find(function (m) { return m.getDominio() === dominio; });
        if (moto) {
            moto.setCilindrada(nuevaCilindrada); // Usamos el setter para modificar la cilindrada
            console.log("La cilindrada de la moto con dominio ".concat(dominio, " ha sido actualizada a ").concat(nuevaCilindrada, "."));
        }
        else {
            console.log("No se encontr\u00F3 una moto con el dominio ".concat(dominio, "."));
        }
    };
    // Método para buscar un auto por dominio y modificar su cantidad de puertas
    RegistroAutomotor.prototype.modificarPuertasAuto = function (dominio, nuevasPuertas) {
        var auto = this.listAutos.find(function (a) { return a.getDominio() === dominio; });
        if (auto) {
            auto.setCantPuertas(nuevasPuertas); // Usamos el setter para modificar la cantidad de puertas
            console.log("La cantidad de puertas del auto con dominio ".concat(dominio, " ha sido actualizada a ").concat(nuevasPuertas, "."));
        }
        else {
            console.log("No se encontr\u00F3 un auto con el dominio ".concat(dominio, "."));
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
