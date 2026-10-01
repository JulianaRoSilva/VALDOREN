"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Auxiliares_1 = require("./Auxiliares/Auxiliares");
const Caminhos_1 = require("./Caminhos/Caminhos");
const Necromante_1 = require("./Personagens/Necromante");
let personagem = new Necromante_1.Necromante('Rainha das trevas');
(0, Auxiliares_1.clear)();
(0, Auxiliares_1.arteInfoJogo)();
(0, Auxiliares_1.stop)();
(0, Caminhos_1.inicio)(personagem);
// iniciarConfronto(new Bardo('Ju'), new ReiOssos())
