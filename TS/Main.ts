import { arteInfoJogo, clear, stop } from "./Auxiliares/Auxiliares";
import { inicio } from "./Caminhos/Caminhos";

import { criaPersonagem } from "./Personagens/CriaPersonagem";

let personagem = criaPersonagem()

clear();
arteInfoJogo();
stop();

inicio(personagem);
