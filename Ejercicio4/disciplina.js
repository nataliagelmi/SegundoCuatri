"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disciplina = void 0;
var Disciplina = /** @class */ (function () {
    function Disciplina(nombre, horario, nivel) {
        this.profesores = [];
        this.alumnos = [];
        this.nombre = nombre;
        this.horario = horario;
        this.nivel = nivel;
    }
    Disciplina.prototype.asignarProfesor = function (profesor) {
        this.profesores.push(profesor);
    };
    Disciplina.prototype.inscribirAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    return Disciplina;
}());
exports.Disciplina = Disciplina;
