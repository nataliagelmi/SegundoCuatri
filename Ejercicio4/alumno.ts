import { Staff } from "../Ejercicio4/staff";

export class Alumno extends Staff {
    
    private nivel: string;
    //  me crea las instancias.
    constructor(nombre: string, dni: number, nivel: string) {
        super(nombre, dni);
        this.nivel= nivel;
    }
   
    //getter
   
    getEspecialidad(): string {
        return this.nivel;
    }
    // setters   
   
    setEspecialidad(nivel: string): void {
        if (nivel != " ") {
            this.nivel= this.nivel;
        }
    }
    inscribirseDisciplina(): void {
        console.log(`${this.getNombre} se ha inscrito en una disciplina`);
   }
}
