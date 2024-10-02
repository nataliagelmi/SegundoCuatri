import { vehiculo } from "./vehiculo";

export class Auto extends vehiculo {
    
    private cantPuertas: number;
    //  me crea las instancias.
    constructor(dominio: string, marca: string, modelo: string, anio: number, cantPuertas: number) {
        super(dominio,marca, modelo, anio );
        this.cantPuertas = cantPuertas;
    }
   
    //getter
   
    getCantPuertas(): number {
        return this.cantPuertas;
    }
    // setters   
   
    setCantPuertas(cantPuertas: number): void {
        if (cantPuertas > 0 && cantPuertas>=5) { // Verifico que la cantidad de puertas sea >0 y menor a 5
            this.cantPuertas = cantPuertas;
        }
    }
}
