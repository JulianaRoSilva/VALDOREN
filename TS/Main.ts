import { arteInfoJogo, clear, stop } from "./Auxiliares/Auxiliares";
import { inicio } from "./Caminhos/Caminhos";

import { criaPersonagem } from "./Personagens/CriaPersonagem";
import { Necromante } from "./Personagens/Necromante";

let personagem = criaPersonagem()

clear();
arteInfoJogo();
stop();

inicio(personagem);
