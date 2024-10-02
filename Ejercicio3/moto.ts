import { vehiculo } from "./vehiculo";

export class Moto extends vehiculo {

    private cilindrada: number;
   
    //  me crea las instancias.

    constructor(dominio: string, marca: string, modelo: string, anio: number, cilindrada: number) {
        super(dominio,marca, modelo, anio);
        this.cilindrada = cilindrada;;
    }
    //getter

    getCilindrada(): number {
        return this.cilindrada;
    }
    // setters   

    setCilindrada(cilindrada: number): void {
        if (cilindrada > 0) { // Verifico que la cilindrada sea >0 
            this.cilindrada = cilindrada;
        }
    }
} 