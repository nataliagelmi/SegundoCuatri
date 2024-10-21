export abstract class Personaje {
    protected nombre: string;
    protected nivel: number;
    protected puntosDeVida: number;

    constructor(nombre: string, puntosDeVida: number) {
        this.nombre = nombre;
        this.nivel = 1;
        this.puntosDeVida = puntosDeVida;
    }

    atacar(): void {
        console.log(`${this.nombre} está atacando.`);
    }

    defender(): void {
        console.log(`${this.nombre} está defendiendo.`);
    }
    // este metodo busca decremetar los puntos de vida por los ataques recibidos. 
    recibirAtaque(herida: number): void {
        this.puntosDeVida -= herida;
        console.log(`${this.nombre} ha recibido ${herida}.`);
        if (this.puntosDeVida <= 0) {
            this.puntosDeVida = 0;
            console.log(`${this.nombre} ha sido derrotado.`);
        } else {
            console.log(`${this.nombre} tiene ${this.puntosDeVida}  de vida restantes.`);
        }
    }
}
