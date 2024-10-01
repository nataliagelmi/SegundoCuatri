export class Camion {
    private dominio: string;
    private marca: string;
    private modelo: string;
    private anio: number;
    private capacidad: number;
    //  me crea las instancias.
    constructor(dominio: string, marca: string, modelo: string, anio: number, capacidad: number) {
        this.dominio = dominio;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.capacidad = capacidad;
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

    getCapacidad(): number {
        return this.capacidad;
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

    setCapacidad(capacidad: number): void {
        if (capacidad > 0) { // Verifica que la capacidad sea positiva
            this.capacidad = capacidad;
        }
    }
    
}   