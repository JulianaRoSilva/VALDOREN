import { arteInfoJogo, clear, stop } from "./Auxiliares/Auxiliares";
import { yellow } from "./Auxiliares/Cores";
import { inicio } from "./Caminhos/Caminhos";
import { iniciarConfronto } from "./Inimigos/Confronto";
import { Dragao } from "./Inimigos/Dragao";
import { Esqueleto } from "./Inimigos/Esqueleto";
import { FadaCorrompida } from "./Inimigos/FadaCorrompida";
import { Fantasma } from "./Inimigos/Fantasma";
import { ReiOssos } from "./Inimigos/ReiOssos";
import { Saqueador } from "./Inimigos/Saqueador";
import { Bardo } from "./Personagens/Bardo";
import { criaPersonagem } from "./Personagens/CriaPersonagem";

// let personagem = criaPersonagem();

// clear();
// arteInfoJogo();
// stop();

// inicio(personagem);

iniciarConfronto(new Bardo('Ju'), new ReiOssos())