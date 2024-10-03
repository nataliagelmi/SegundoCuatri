import { Auto } from "../Ejercicio3/auto";
import { Moto } from "../Ejercicio3/moto";
import { Camion } from "../Ejercicio3/camion";
import { RegistroAutomotor } from "../Ejercicio3/registro";

function main() {
  const registro = new RegistroAutomotor("Seccional 1");

  // Crear vehículos
  const auto1 = new Auto("NEG321", "Toyota", "Corolla", 2020, 4);
  const moto1 = new Moto("ABC001", "Yamaha", "MT-07", 2021, 700);
  const camion1 = new Camion("PPA987", "Mercedes", "Actros", 2019, 18000);

  // Agregar vehículos al registro
  registro.agregarVehiculo('auto', auto1);
  registro.agregarVehiculo('moto', moto1);
  registro.agregarVehiculo('camion', camion1);



  //agrego otra auto
  const nuevoaAuto = new Auto("XXY421", "Toyota", "hilux", 2022, 4);
  registro.agregarVehiculo("auto", nuevoaAuto);

  // Mostrar el registro 
  console.log("Registro automotor actualizado: ", registro);

    // Modificar la cilindrada de una moto
   registro.modificarCilindradaMoto("ABC001", 800); // Cambiar cilindrada de la moto con dominio "ABC001"
  // Modificar la cantidad de puertas de un auto
  registro.modificarPuertasAuto("NEG321", 5); // Cambiar cantidad de puertas del auto con dominio "NEG321"
  // Modificar la capacidad de un camión específico
  registro.modificarCapacidadCamion("PPA987", 22000);  // Modifica la capacidad del camión con dominio "PPA987"

  // Mostrar el registro 
  console.log("Registro automotor actualizado: ", registro);


}

main();
