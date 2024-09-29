
export class Auto {
    private marca: string;
    private modelo: string;
    private anio: number;
    private cantPuertas: number;
//  me crea las instancias.
    constructor(marca: string, modelo: string, anio:number, cantPuertas:number) {
        this.marca = marca;
        this.modelo= modelo ;
        this.anio= anio;
        this.cantPuertas= cantPuertas;
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

    getCantPuertas(): number{
        return this.cantPuertas;
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
    setCantPuertas(cantPuertas: number): void {
        this.cantPuertas = cantPuertas;
    }
}