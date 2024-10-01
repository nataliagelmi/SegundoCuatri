
export class Auto {
    private dominio: string;
    private marca: string;
    private modelo: string;
    private anio: number;
    private cantPuertas: number;
    //  me crea las instancias.
    constructor(dominio: string, marca: string, modelo: string, anio: number, cantPuertas: number) {
        this.dominio = dominio;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.cantPuertas = cantPuertas;
    }
    //getter
    getDominio(): string {
        return this.dominio;
    }
    getMarca(): string {
        return this.marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    getAnio(): number {
        return this.anio;
    }

    getCantPuertas(): number {
        return this.cantPuertas;
    }
    // setters   
    setDominio(dominio: string): void {
        if (dominio && dominio.trim() !== '') { // Verifico que no esté vacío
            this.dominio = dominio;
        }
    }

    setMarca(marca: string): void {
        if (marca && marca.trim() !== '') { // Verifico que no esté vacío
            this.marca = marca;
        }
    }

    setModelo(modelo: string): void {
        if (modelo && modelo.trim() !== '') { // Verifico que no esté vacío
            this.modelo = modelo;
        }
    }

    setAnio(anio: number): void {
        const anioActual = new Date().getFullYear();
        if (anio >= 1900 && anio <= anioActual) { // Verifico que sea un año válido
            this.anio = anio;
        }
    }

    setCantPuertas(cantPuertas: number): void {
        if (cantPuertas > 0 && cantPuertas>=5) { // Verifico que la cantidad de puertas sea >0 y menor a 5
            this.cantPuertas = cantPuertas;
        }
    }
}
