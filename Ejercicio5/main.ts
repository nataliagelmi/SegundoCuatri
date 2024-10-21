import {Personaje} from "./personaje";
import {Mago} from "./mago";
import {ArchiMago} from "./archimago";
import {Arquero} from "./arquero";
import {Luchador} from "./luchador";
import {Mejorado} from "./mejorapersonaje"; 



// Crear personajes
const mago = new Mago("Houdini", 100, 5);
const luchador = new Luchador("Golliat", 50, 10);
const arquero = new Arquero("Eliseo", 90, 20);
const archimago = new ArchiMago("Merlin", 120, 10, "tornado demoledor");

// arreglo de personajes
let personajes: Personaje[] = [mago, luchador, arquero, archimago];

// Uso polimorfismo 
personajes.forEach((personaje) => {
  personaje.atacar();
  personaje.defender();
});

// métodos específicos de cada clase
mago.lanzarHechizo();
luchador.golpe();
arquero.dispararFlecha();
archimago.hechizoDemoledor();

// reciben ataques
personajes.forEach((personaje) => {
  personaje.recibirAtaque(50); 
});

// es un personaje especial heredado de la clase mago.
archimago.lanzarHechizo(); // Usa el hechizo mejorado
archimago.hechizoDemoledor(); // Usa el poder especial


//con el personaje mejorado
const personajeMejorado = new Mejorado('Merlin',20);
personajeMejorado.aprenderHabilidad('Desaparecer');
personajeMejorado.usarHabilidad('Desaparecer');
