import { Personaje } from "./personaje";

export class Mago extends Personaje {
    protected poder_magico: number;
    private   poder_magico_minimo = 0; 

    constructor(nombre: string, puntosDeVida: number, poder_magico: number) {
        super(nombre, puntosDeVida);
        this.poder_magico = poder_magico;
    }

    lanzarHechizo(): void {
        if (this.poder_magico > this.poder_magico_minimo) {
            console.log(`${this.nombre} lanza un hechizo.`);
            this.poder_magico--;
        } else {
            console.log(`${this.nombre} no tiene suficiente poder.`);
        }
    }
}
