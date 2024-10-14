import { Staff } from "../Ejercicio4/staff"; // Asegúrate de que la ruta es correcta

export class Profesor extends Staff {
    private especialidad: string;
    private legajo: number;

    // Constructor que crea las instancias
    constructor(nombre: string, dni: number, especialidad: string, legajo:number) {
        super(nombre, dni); // Llama al constructor de la clase padre Staff
        this.especialidad = especialidad;
        this.legajo = legajo;
    }

    // Getter
    getEspecialidad(): string {
        return this.especialidad;
    }

    // Setter corregido
    setEspecialidad(especialidad: string): void {
        if (especialidad.trim() !== "") { // Validación más robusta para que no acepte espacios vacíos
            this.especialidad = especialidad; // Asignación correcta del valor
        } else {
            console.error("Especialidad inválida.");
        }
    }

    // Método dictarClase
    dictarClase(): void {
        console.log(`${this.nombre} está dictando una clase de ${this.especialidad}`);
    }

     // Implementación del método abstracto
     obtenerIdentificador(): string {
        return `Legajo del Profesor: ${this.legajo}`;
    }
}
