export class Moto {
    private marca: string;
    private modelo: string;
    private anio: number;
    private cilindrada: number;
//  me crea las instancias.
    constructor(marca: string, modelo: string, anio:number, cilindrada:number) {
        this.marca = marca;
        this.modelo= modelo ;
        this.anio= anio;
        this.cilindrada= cilindrada;
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

    getCilindrada(): number{
        return this.cilindrada;
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
    setCilindrada(cilindrada: number): void {
        this.cilindrada = cilindrada;
    }
}   