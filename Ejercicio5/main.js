"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mago_1 = require("./mago");
var archimago_1 = require("./archimago");
var arquero_1 = require("./arquero");
var luchador_1 = require("./luchador");
var mejorapersonaje_1 = require("./mejorapersonaje");
// Crear personajes
var mago = new mago_1.Mago("Houdini", 100, 5);
var luchador = new luchador_1.Luchador("Golliat", 50, 10);
var arquero = new arquero_1.Arquero("Eliseo", 90, 20);
var archimago = new archimago_1.ArchiMago("Merlin", 120, 10, "tornado demoledor");
// arreglo de personajes
var personajes = [mago, luchador, arquero, archimago];
// Uso polimorfismo 
personajes.forEach(function (personaje) {
    personaje.atacar();
    personaje.defender();
});
// métodos específicos de cada clase
mago.lanzarHechizo();
luchador.golpe();
arquero.dispararFlecha();
archimago.hechizoDemoledor();
// reciben ataques
personajes.forEach(function (personaje) {
    personaje.recibirAtaque(50);
});
// es un personaje especial heredado de la clase mago.
archimago.lanzarHechizo(); // Usa el hechizo mejorado
archimago.hechizoDemoledor(); // Usa el poder especial
//con el personaje mejorado
var personajeMejorado = new mejorapersonaje_1.Mejorado('Merlin', 20);
personajeMejorado.aprenderHabilidad('Desaparecer');
personajeMejorado.usarHabilidad('Desaparecer');
