import { arteInfoJogo, clear, stop } from "./Auxiliares/Auxiliares";
import { inicio } from "./Caminhos/Caminhos";

import { criaPersonagem } from "./Personagens/CriaPersonagem";
import { Necromante } from "./Personagens/Necromante";

let personagem = new Necromante('Rainha das trevas');

clear();
arteInfoJogo();
stop();

inicio(personagem);

// iniciarConfronto(new Bardo('Ju'), new ReiOssos())