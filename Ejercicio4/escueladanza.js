"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscuelaDanza = void 0;
var EscuelaDanza = /** @class */ (function () {
    function EscuelaDanza(nombre, ubicacion) {
        this.staff = [];
        this.disciplinas = [];
        this.nombre = nombre;
        this.ubicacion = ubicacion;
    }
    EscuelaDanza.prototype.registrarDisciplina = function (disciplina) {
        this.disciplinas.push(disciplina);
    };
    EscuelaDanza.prototype.agregarStaff = function (staff) {
        this.staff.push(staff);
    };
    return EscuelaDanza;
}());
exports.EscuelaDanza = EscuelaDanza;
