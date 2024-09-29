import { Auto } from "../Ejercicio2/auto";
import { Moto } from "../Ejercicio2/moto";
import { Camion } from "../Ejercicio2/camion";


export class RegistroAutomotor {
  private listAutos: Auto[] = [];
  private listCamion: Camion[] = [];
  private listMoto: Moto[] = [];
  private seccionId: string;

  constructor(seccionId: string) {
    this.seccionId = seccionId;
  }

  // Métodos para agregar vehículos
  agregarVehiculo(tipo: 'auto' | 'moto' | 'camion', vehiculo: Auto | Moto | Camion): void {
    if (tipo === 'auto') {
      this.listAutos.push(vehiculo as Auto);
    } else if (tipo === 'camion') {
      this.listCamion.push(vehiculo as Camion);
    } else if (tipo === 'moto') {
      this.listMoto.push(vehiculo as Moto);
    }
  }

  // Métodos para modificar vehículos
  modificarVehiculo(tipo: 'auto' | 'moto' | 'camion', index: number, vehiculo: Auto | Moto | Camion): void {
    if (tipo === 'auto' && index >= 0 && index < this.listAutos.length) {
      this.listAutos[index] = vehiculo as Auto;
    } else if (tipo === 'camion' && index >= 0 && index < this.listCamion.length) {
      this.listCamion[index] = vehiculo as Camion;
    } else if (tipo === 'moto' && index >= 0 && index < this.listMoto.length) {
      this.listMoto[index] = vehiculo as Moto;
    }
  }

  // Métodos para dar de baja vehículos
  darDeBajaVehiculo(tipo: 'auto' | 'moto' | 'camion', index: number): void {
    if (tipo === 'auto' && index >= 0 && index < this.listAutos.length) {
      this.listAutos.splice(index, 1);
    } else if (tipo === 'camion' && index >= 0 && index < this.listCamion.length) {
      this.listCamion.splice(index, 1);
    } else if (tipo === 'moto' && index >= 0 && index < this.listMoto.length) {
      this.listMoto.splice(index, 1);
    }
  }

  // para obtener listas de vehículos
 getVehiculos(tipo: 'auto' | 'moto' | 'camion'): Auto[] | Moto[] | Camion[] {
    if (tipo === 'auto') {
      return this.listAutos;
    } else if (tipo === 'camion') {
      return this.listCamion;
    } else {
      return this.listMoto;
    }
  }

  // Métodos para el ID de sección
 getSeccionId(): string {
    return this.seccionId;
  }

 setSeccionId(seccionId: string): void {
    this.seccionId = seccionId;
  }
}
