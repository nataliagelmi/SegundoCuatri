import { Personaje } from "./personaje";

export class Arquero extends Personaje {
    cant_flechas: number;

    constructor(nombre: string, puntosDeVida: number, cant_flechas: number) {
        super(nombre, puntosDeVida);
        this.cant_flechas = cant_flechas;
    }

    dispararFlecha(): void {
        if (this.cant_flechas > 0) {
            console.log(`${this.nombre} dispara una flecha.`);
            this.cant_flechas--;
        } else {
            console.log(`${this.nombre} no tiene más flechas.`);
        }
    }


}
