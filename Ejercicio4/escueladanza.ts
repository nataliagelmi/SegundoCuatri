import { Disciplina } from "./disciplina";
import { Staff } from "./staff";

export class EscuelaDanza {
  nombre: string;
  ubicacion: string;
  staff: Staff[] = [];
  disciplinas: Disciplina[] = [];

  constructor(nombre: string, ubicacion: string) {
    this.nombre = nombre;
    this.ubicacion = ubicacion;
  }

  registrarDisciplina(disciplina: Disciplina): void {
    this.disciplinas.push(disciplina);
  }

  agregarStaff(staff: Staff): void {
    this.staff.push(staff);
  }
}
