export class Camion {
    private marca: string;
    private modelo: string;
    private anio: number;
    private capacidad: number;
//  me crea las instancias.
    constructor(marca: string, modelo: string, anio:number, capacidad:number) {
        this.marca = marca;
        this.modelo= modelo ;
        this.anio= anio;
        this.capacidad= capacidad;
    }
//getter
    getMarca(): string {
        return this.marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    getAnio(): number {
        return this.anio;
    }

    getCapacidad(): number{
        return this.capacidad;
    }
 // setters   
    setMarca(marca: string): void {
        this.marca = marca;
    }

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }
   
    setAnio(anio: number): void {
        this.anio = anio;
    }
    setCapacidad(cantPuertas: number): void {
        this.capacidad = cantPuertas;
    }
}   