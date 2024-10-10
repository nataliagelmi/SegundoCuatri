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
exports.Alumno = void 0;
var staff_1 = require("../Ejercicio4/staff");
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    //  me crea las instancias.
    function Alumno(nombre, dni, nivel) {
        var _this = _super.call(this, nombre, dni) || this;
        _this.nivel = nivel;
        return _this;
    }
    //getter
    Alumno.prototype.getEspecialidad = function () {
        return this.nivel;
    };
    // setters   
    Alumno.prototype.setEspecialidad = function (nivel) {
        if (nivel != " ") {
            this.nivel = this.nivel;
        }
    };
    Alumno.prototype.inscribirseDisciplina = function () {
        console.log("".concat(this.getNombre, " se ha inscrito en una disciplina"));
    };
    return Alumno;
}(staff_1.Staff));
exports.Alumno = Alumno;
