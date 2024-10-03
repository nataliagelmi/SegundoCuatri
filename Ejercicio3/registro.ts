import { Auto } from "../Ejercicio3/auto";
import { Moto } from "../Ejercicio3/moto";
import { Camion } from "../Ejercicio3/camion";


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

   // Método para buscar un camión por dominio y modificar su capacidad
   modificarCapacidadCamion(dominio: string, nuevaCapacidad: number): void {
    const camion = this.listCamion.find(c => c.getDominio() === dominio);
    if (camion) {
        camion.setCapacidad(nuevaCapacidad); //  modificar la capacidad
        console.log(`La capacidad del camión con dominio ${dominio} ha sido actualizada a ${nuevaCapacidad}.`);
    } else {
        console.log(`No se encontró un camión con el dominio ${dominio}.`);
    }
}

 // Método para buscar una moto por dominio y modificar su cilindrada
 modificarCilindradaMoto(dominio: string, nuevaCilindrada: number): void {
  const moto = this.listMoto.find(m => m.getDominio() === dominio);
  if (moto) {
      moto.setCilindrada(nuevaCilindrada); // Usamos el setter para modificar la cilindrada
      console.log(`La cilindrada de la moto con dominio ${dominio} ha sido actualizada a ${nuevaCilindrada}.`);
  } else {
      console.log(`No se encontró una moto con el dominio ${dominio}.`);
  }
}
 //  Esto es para la herencia
 modificarModeloMoto(dominio: string, nuevoModelo: string): void {
  const moto = this.listMoto.find(m => m.getDominio() === dominio);
  if (moto) {
    moto.setModelo(nuevoModelo);
    console.log(`El modelo de la moto con dominio ${dominio} ha sido actualizado a ${nuevoModelo}.`);
  } else {
    console.log(`No se encontró una moto con el dominio ${dominio}.`);
  }
}
 

 // Método para buscar un auto por dominio y modificar su cantidad de puertas
 modificarPuertasAuto(dominio: string, nuevasPuertas: number): void {
  const auto = this.listAutos.find(a => a.getDominio() === dominio);
  if (auto) {
      auto.setCantPuertas(nuevasPuertas); // Usamos el setter para modificar la cantidad de puertas
      console.log(`La cantidad de puertas del auto con dominio ${dominio} ha sido actualizada a ${nuevasPuertas}.`);
  } else {
      console.log(`No se encontró un auto con el dominio ${dominio}.`);
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
