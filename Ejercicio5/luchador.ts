
import { Personaje } from "./personaje";

export class Luchador extends Personaje {
   protected golpes: number;

    constructor(nombre: string, puntosDeVida: number, golpes: number) {
        super(nombre, puntosDeVida);
        this.golpes = golpes;
    }
     
    golpe(): void {
        console.log(`${this.nombre} da un golpe fuerte con fuerza de ${this.golpes}.`);
    }
}