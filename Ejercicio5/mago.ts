import { Personaje } from "./personaje";

export class Mago extends Personaje {
    protected poder_magico: number;

    constructor(nombre: string, puntosDeVida: number, poder_magico: number) {
        super(nombre, puntosDeVida);
        this.poder_magico = poder_magico;
    }

    lanzarHechizo(): void {
        if (this.poder_magico > 0) {
            console.log(`${this.nombre} lanza un hechizo.`);
            this.poder_magico--;
        } else {
            console.log(`${this.nombre} no tiene suficiente poder.`);
        }
    }
}
