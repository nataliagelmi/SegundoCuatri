"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var escueladanza_1 = require("./escueladanza");
var profesor_1 = require("./profesor");
var alumno_1 = require("./alumno");
var disciplina_1 = require("./disciplina");
var escuela = new escueladanza_1.EscuelaDanza("Escuela de Danza Moderna", "Calle Principal 123");
// Crear profesores y alumnos
var profesorAna = new profesor_1.Profesor("Ana", 27511541, "Ballet");
var profesorCarlos = new profesor_1.Profesor("Carlos", 7655212, "Jazz");
var alumnoLaura = new alumno_1.Alumno("Laura", 20266311, "Intermedio");
var alumnoJuan = new alumno_1.Alumno("Juan", 22551124, "Avanzado");
// Crear disciplinas
var disciplinaBallet = new disciplina_1.Disciplina("Ballet", "10:00 AM", "Intermedio");
var disciplinaJazz = new disciplina_1.Disciplina("Jazz", "2:00 PM", "Avanzado");
// Asignar profesores y alumnos a disciplinas
disciplinaBallet.asignarProfesor(profesorAna);
disciplinaBallet.inscribirAlumno(alumnoLaura);
disciplinaJazz.asignarProfesor(profesorCarlos);
disciplinaJazz.inscribirAlumno(alumnoJuan);
// Registrar disciplinas en la escuela
escuela.registrarDisciplina(disciplinaBallet);
escuela.registrarDisciplina(disciplinaJazz);
// Agregar staff a la escuela
escuela.agregarStaff(profesorAna);
escuela.agregarStaff(profesorCarlos);
escuela.agregarStaff(alumnoLaura);
escuela.agregarStaff(alumnoJuan);
// Imprimir información
console.log("Escuela: ".concat(escuela.nombre, ", Ubicaci\u00F3n: ").concat(escuela.ubicacion));
console.log("Disciplinas ofrecidas:");
escuela.disciplinas.forEach(function (disciplina) {
    console.log("- ".concat(disciplina.nombre, " (").concat(disciplina.horario, ")"));
    console.log("  Profesores: ".concat(disciplina.profesores.map(function (prof) { return prof.getNombre(); }).join(", ")));
    console.log("  Alumnos: ".concat(disciplina.alumnos.map(function (alum) { return alum.getNombre(); }).join(", ")));
});
