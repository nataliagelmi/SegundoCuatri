"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, puntosDeVida) {
        this.nombre = nombre;
        this.nivel = 1;
        this.puntosDeVida = puntosDeVida;
    }
    Personaje.prototype.atacar = function () {
        console.log("".concat(this.nombre, " est\u00E1 atacando."));
    };
    Personaje.prototype.defender = function () {
        console.log("".concat(this.nombre, " est\u00E1 defendiendo."));
    };
    // este metodo busca decremetar los puntos de vida por los ataques recibidos. 
    Personaje.prototype.recibirAtaque = function (herida) {
        this.puntosDeVida -= herida;
        console.log("".concat(this.nombre, " ha recibido ").concat(herida, "."));
        if (this.puntosDeVida <= 0) {
            this.puntosDeVida = 0;
            console.log("".concat(this.nombre, " ha sido derrotado."));
        }
        else {
            console.log("".concat(this.nombre, " tiene ").concat(this.puntosDeVida, "  de vida restantes."));
        }
    };
    return Personaje;
}());
exports.Personaje = Personaje;
