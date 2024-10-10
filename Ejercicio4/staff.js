"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
var Staff = /** @class */ (function () {
    function Staff(nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
    }
    //getter
    Staff.prototype.getNombre = function () {
        return this.nombre;
    };
    Staff.prototype.getDni = function () {
        return this.dni;
    };
    // setters   
    Staff.prototype.setNombre = function (nombre) {
        if (nombre != " ") {
            this.nombre = this.nombre;
        }
    };
    Staff.prototype.setDni = function (dni) {
        var dniString = dni.toString(); // Convierte el DNI a string para verificar su longitud
        // Verificar que el DNI sea un número y tenga 8 dígitos
        if (dniString.length === 7 && !isNaN(dni)) {
            this.dni = dni;
        }
        else {
            console.error("DNI inválido. Debe ser un número de 8 dígitos.");
        }
    };
    return Staff;
}());
exports.Staff = Staff;
