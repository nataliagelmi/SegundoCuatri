import { Profesor } from "./profesor";
import { Alumno } from "./alumno";

 
export class Disciplina {
  nombre: string;
  horario: string;
  nivel: string;
  profesores: Profesor[] = [];
  alumnos: Alumno[] = [];

  constructor(nombre: string, horario: string, nivel: string) {
    this.nombre = nombre;
    this.horario = horario;
    this.nivel = nivel;
  }

  asignarProfesor(profesor: Profesor): void {
    this.profesores.push(profesor);
  }

  inscribirAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
  }
}

