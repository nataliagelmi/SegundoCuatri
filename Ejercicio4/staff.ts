export class Staff {
    protected nombre: string;
    protected dni: number;

    constructor(nombre:string, dni:number){
        this.nombre=nombre;
        this.dni =dni;
    }
   
    //getter

    getNombre(): string {
        return this.nombre;
    }
    getDni(): number {
        return this.dni;
    }
    // setters   

    setNombre(nombre: string): void {
        if (nombre != " ") {
            this.nombre = this.nombre;
        }
    }
    
    setDni(dni: number): void {
        const dniString = dni.toString(); // Convierte el DNI a string para verificar su longitud

        // Verificar que el DNI sea un número y tenga 8 dígitos
        if (dniString.length === 7 && !isNaN(dni)) {
            this.dni = dni;
        } else {
            console.error("DNI inválido. Debe ser un número de 8 dígitos.");
        }
    }
}