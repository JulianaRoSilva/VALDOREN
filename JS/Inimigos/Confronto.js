"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iniciarConfronto = iniciarConfronto;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
const ReiOssos_1 = require("./ReiOssos");
const ask = require('readline-sync');
function iniciarConfronto(personagem, inimigo) {
    let finalConfronto = false; // atributo para controlar quando o confronto vai acabar
    let option; // Variável para controlar a opção desejada, ela vai ser reutilizada ao decorrer do código
    (0, Auxiliares_1.clear)();
    (0, Auxiliares_1.arteInicioConfronto)();
    (0, Auxiliares_1.infosConfronto)();
    (0, Auxiliares_1.infoCoresConfronto)();
    inimigo.fichaHabilidade();
    (0, Auxiliares_1.stop)();
    while (!finalConfronto) {
        if (personagem.getVida() > 0) {
            if (inimigo.getVida() > 0) {
                (0, Auxiliares_1.clear)();
                (0, Auxiliares_1.mostrarInfoCombate)(personagem, inimigo);
                (0, Auxiliares_1.escolhasCombate)(personagem);
                option = Number(ask.question());
                switch (option) {
                    case 1: // atacar
                        (0, Auxiliares_1.clear)();
                        personagem.atacar(inimigo);
                        (0, Auxiliares_1.stop)();
                        // if especifico de ataque do rei ossos, porque ele pode ter vida zero e ressurgir novamente
                        if (inimigo instanceof ReiOssos_1.ReiOssos) {
                            if (!inimigo.getRessurgir()) {
                                (0, Auxiliares_1.clear)();
                                inimigo.atacar(personagem);
                                break; //parar while codigo caso o rei ossos atacar 1x já
                            }
                        }
                        // If para que caso o inimigo morrer com o meu ataque, ele nao me contra atacar
                        if (inimigo.getVida() > 0) {
                            (0, Auxiliares_1.clear)();
                            inimigo.atacar(personagem);
                        }
                        break;
                    case 2: // Abrir inventário
                        personagem.mostrarInventario();
                        option = Number(ask.question());
                        switch (option) {
                            case 1:
                                (0, Auxiliares_1.clear)();
                                const pocao = personagem.escolherPocao();
                                if (pocao !== null) {
                                    (0, Auxiliares_1.clear)();
                                    personagem.tomarPocao(pocao);
                                    // stop();
                                }
                                break;
                            case 2:
                                //Apenas faz voltar para o menu
                                break;
                            default:
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.red)('Opcao invalida!');
                                (0, Auxiliares_1.stop)();
                                break;
                        }
                        break;
                    case 3: // usar especial e setar o useiEspecial true
                        (0, Auxiliares_1.clear)();
                        personagem.usarAtaqueEspecial(inimigo); // inimigo com certeza vai morrer
                        (0, Auxiliares_1.stop)();
                        break;
                    default:
                        (0, Cores_1.red)('Opcao inválida');
                        (0, Auxiliares_1.stop)();
                        break;
                }
            }
            else {
                (0, Auxiliares_1.clear)();
                (0, Auxiliares_1.arteInimigoDerrotado)(); // Arte de inimigo derrotado
                personagem.setReputacao(10); // ao vencer confronto, ganha reputação
                personagem.setOuro(20); // ao vencer confronto, ganha ouro
                (0, Cores_1.yellow)(`+20 OURO PELA VITÓRIA DO COMBATE`);
                finalConfronto = true;
                (0, Auxiliares_1.stop)();
            }
        }
        else {
            (0, Auxiliares_1.clear)();
            (0, Auxiliares_1.arteVoceMorreu)(); // Arte de morte
            process.exit();
        }
    }
}
