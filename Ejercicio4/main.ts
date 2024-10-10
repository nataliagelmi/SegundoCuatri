import { EscuelaDanza } from "./escueladanza";
import { Profesor } from "./profesor";
import { Alumno } from "./alumno";
import { Disciplina } from "./disciplina";

const escuela = new EscuelaDanza("Escuela de Danza Moderna", "Calle Principal 123");

// Crear profesores y alumnos
const profesorAna = new Profesor("Ana", 27511541, "Ballet");
const profesorCarlos = new Profesor("Carlos", 7655212, "Jazz");
const alumnoLaura = new Alumno("Laura", 20266311, "Intermedio");
const alumnoJuan = new Alumno("Juan", 22551124, "Avanzado");

// Crear disciplinas
const disciplinaBallet = new Disciplina("Ballet", "10:00 AM", "Intermedio");
const disciplinaJazz = new Disciplina("Jazz", "2:00 PM", "Avanzado");

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
console.log(`Escuela: ${escuela.nombre}, Ubicación: ${escuela.ubicacion}`);
console.log(`Disciplinas ofrecidas:`);
escuela.disciplinas.forEach((disciplina) => {
  console.log(`- ${disciplina.nombre} (${disciplina.horario})`);
  console.log(`  Profesores: ${disciplina.profesores.map(prof => prof.getNombre()).join(", ")}`);
  console.log(`  Alumnos: ${disciplina.alumnos.map(alum => alum.getNombre()).join(", ")}`);
});