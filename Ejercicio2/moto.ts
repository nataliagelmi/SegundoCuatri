export class Moto {
    private dominio: string;
    private marca: string;
    private modelo: string;
    private anio: number;
    private cilindrada: number;
    //  me crea las instancias.
    constructor(dominio: string, marca: string, modelo: string, anio: number, cilindrada: number) {
        this.dominio = dominio;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.cilindrada = cilindrada;
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

    getCilindrada(): number {
        return this.cilindrada;
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

    setCilindrada(cilindrada: number): void {
        if (cilindrada > 0) { // Verifico que la cilindrada sea >0 
            this.cilindrada = cilindrada;
        }
    }
} 