"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auto_1 = require("../Ejercicio3/auto");
var moto_1 = require("../Ejercicio3/moto");
var camion_1 = require("../Ejercicio3/camion");
var registro_1 = require("../Ejercicio3/registro");
function main() {
    var registro = new registro_1.RegistroAutomotor("Seccional 1");
    // Crear vehículos
    var auto1 = new auto_1.Auto("NEG321", "Toyota", "Corolla", 2020, 4);
    var moto1 = new moto_1.Moto("ABC001", "Yamaha", "MT-07", 2021, 700);
    var camion1 = new camion_1.Camion("PPA987", "Mercedes", "Actros", 2019, 18000);
    // Agregar vehículos al registro
    registro.agregarVehiculo('auto', auto1);
    registro.agregarVehiculo('moto', moto1);
    registro.agregarVehiculo('camion', camion1);
    //agrego otra auto
    var nuevoaAuto = new auto_1.Auto("XXY421", "Toyota", "hilux", 2022, 4);
    registro.agregarVehiculo("auto", nuevoaAuto);
    // Mostrar el registro 
    console.log("Registro automotor actualizado: ", registro);
    // Modificar la cilindrada de una moto
    registro.modificarCilindradaMoto("ABC001", 800); // Cambiar cilindrada de la moto con dominio "ABC001"
    // Modificar la cantidad de puertas de un auto
    registro.modificarPuertasAuto("NEG321", 5); // Cambiar cantidad de puertas del auto con dominio "NEG321"
    // Modificar la capacidad de un camión específico
    registro.modificarCapacidadCamion("PPA987", 22000); // Modifica la capacidad del camión con dominio "PPA987"
    // Mostrar el registro 
    console.log("Registro automotor actualizado: ", registro);
}
main();
