"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auto_1 = require("../Ejercicio2/auto");
var moto_1 = require("../Ejercicio2/moto");
var camion_1 = require("../Ejercicio2/camion");
var registro_1 = require("../Ejercicio2/registro");
function main() {
    var registro = new registro_1.RegistroAutomotor("Seccional 1");
    // Crear vehículos
    var auto1 = new auto_1.Auto("Toyota", "Corolla", 2020, 4);
    var moto1 = new moto_1.Moto("Yamaha", "MT-07", 2021, 700);
    var camion1 = new camion_1.Camion("Mercedes", "Actros", 2019, 18000);
    // Agregar vehículos al registro
    registro.agregarVehiculo('auto', auto1);
    registro.agregarVehiculo('moto', moto1);
    registro.agregarVehiculo('camion', camion1);
    // Modificar un vehículo (modificar el primer auto)
    var autoModif = new auto_1.Auto("Toyota", "hilux", 2022, 4);
    registro.modificarVehiculo('auto', 0, autoModif);
    //agrego otra moto
    var nuevamoto = new moto_1.Moto("Girella", "smash", 2014, 110);
    registro.agregarVehiculo("moto", nuevamoto);
    // Dar de baja el primer vehículo de tipo moto
    registro.darDeBajaVehiculo('moto', 1);
    // Mostrar el registro 
    console.log("Registro automotor actualizado: ", registro);
}
main();
