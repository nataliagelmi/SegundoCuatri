import { Auto } from "../Ejercicio2/auto";
import { Moto } from "../Ejercicio2/moto";
import { Camion } from "../Ejercicio2/camion";
import { RegistroAutomotor } from "../Ejercicio2/registro";

function main() {
  const registro = new RegistroAutomotor("Seccional 1");

  // Crear vehículos
  const auto1 = new Auto("Toyota", "Corolla", 2020, 4);
  const moto1 = new Moto("Yamaha", "MT-07", 2021, 700);
  const camion1 = new Camion("Mercedes", "Actros", 2019, 18000);

  // Agregar vehículos al registro
  registro.agregarVehiculo('auto', auto1);
  registro.agregarVehiculo('moto', moto1);
  registro.agregarVehiculo('camion', camion1);

  // Modificar un vehículo (modificar el primer auto)
  const autoModif = new Auto("Toyota", "hilux", 2022, 4);
  registro.modificarVehiculo('auto', 0, autoModif);

  //agrego otra moto
  const nuevamoto= new Moto("Girella", "smash",2014,110);
  registro.agregarVehiculo("moto",nuevamoto);

  // Dar de baja el primer vehículo de tipo moto
  registro.darDeBajaVehiculo('moto', 1);

  // Mostrar el registro 
  console.log("Registro automotor actualizado: ", registro);
 

}

main();
