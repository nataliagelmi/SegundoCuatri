import { Mago } from "./mago";

export class ArchiMago extends Mago {
    super_poder: string;

    constructor(nombre: string, puntosDeVida: number, poder_magico: number, super_poder: string) {
        super(nombre, puntosDeVida, poder_magico);
        this.super_poder = super_poder;
    }
    // este personaje tiene un poder super demoledor :)
    hechizoDemoledor(): void {
        if (this.super_poder != " ") {
            console.log(`${this.nombre} hechizo a ejecutar ${this.super_poder}`);

        } else {
            console.log(`${this.nombre} no tiene Super poder.`);
        }
    }
   // este esta mejorado del heredado del mago.
    lanzarHechizo(): void {
        if (this.poder_magico > 15) {
            console.log(`${this.nombre} lanza un hechizo mejorado.`);
            this.poder_magico -= 5; // es mas potente pero se debilita mas rapido
        } else {
            console.log(`${this.nombre} no tiene suficiente poder.`);
        }
    }
}
