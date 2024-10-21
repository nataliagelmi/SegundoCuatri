import {Personaje} from "./personaje"

export class Mejorado extends Personaje {
    protected habilidades: string[] = [];
  
    aprenderHabilidad(nuevaHabilidad: string): void {
      this.habilidades.push(nuevaHabilidad);
      console.log(`${this.nombre} ha aprendido la habilidad: ${nuevaHabilidad}`);
    }
  
    usarHabilidad(habilidad: string): void {
      if (this.habilidades.includes(habilidad)) {
        console.log(`${this.nombre} usa la habilidad: ${habilidad}`);
      } else {
        console.log(`${this.nombre} no conoce la habilidad: ${habilidad}`);
      }
    }
  }