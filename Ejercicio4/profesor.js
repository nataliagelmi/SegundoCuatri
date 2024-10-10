"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
var staff_1 = require("../Ejercicio4/staff"); // Asegúrate de que la ruta es correcta
var Profesor = /** @class */ (function (_super) {
    __extends(Profesor, _super);
    // Constructor que crea las instancias
    function Profesor(nombre, dni, especialidad) {
        var _this = _super.call(this, nombre, dni) || this; // Llama al constructor de la clase padre Staff
        _this.especialidad = especialidad;
        return _this;
    }
    // Getter
    Profesor.prototype.getEspecialidad = function () {
        return this.especialidad;
    };
    // Setter corregido
    Profesor.prototype.setEspecialidad = function (especialidad) {
        if (especialidad.trim() !== "") { // Validación más robusta para que no acepte espacios vacíos
            this.especialidad = especialidad; // Asignación correcta del valor
        }
        else {
            console.error("Especialidad inválida.");
        }
    };
    // Método dictarClase
    Profesor.prototype.dictarClase = function () {
        console.log("".concat(this.nombre, " est\u00E1 dictando una clase de ").concat(this.especialidad));
    };
    return Profesor;
}(staff_1.Staff));
exports.Profesor = Profesor;
