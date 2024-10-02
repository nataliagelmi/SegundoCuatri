import { vehiculo } from "./vehiculo";

export class Camion extends vehiculo{
    
    private capacidad: number;
    //  me crea las instancias.
    constructor(dominio: string, marca: string, modelo: string, anio: number, capacidad: number) {
        super(dominio,marca, modelo, anio ); // tengo que tener en cuenta el orden!
        this.capacidad = capacidad;
    }
    //getter
   
    getCapacidad(): number {
        return this.capacidad;
    }
    // setters   
    
    setCapacidad(capacidad: number): void {
        if (capacidad > 0) { // Verifica que la capacidad sea positiva
            this.capacidad = capacidad;
        }
    }
    
}   