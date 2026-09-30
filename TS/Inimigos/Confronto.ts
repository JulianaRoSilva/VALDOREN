import { clear, escolhasCombate, arteInimigoDerrotado, arteVoceMorreu, stop, mostrarInfoCombate, arteInicioConfronto, infosConfronto, infoCoresConfronto } from "../Auxiliares/Auxiliares";
import { red, yellow } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "../Personagens/Personagem";
import { ReiOssos } from "./ReiOssos";

const ask = require('readline-sync');

export function iniciarConfronto(personagem: Personagem, inimigo: Inimigo) {

    let finalConfronto = false; // atributo para controlar quando o confronto vai acabar
    let option: number;         // Variável para controlar a opção desejada, ela vai ser reutilizada ao decorrer do código

    clear();
    arteInicioConfronto();
    infosConfronto();
    infoCoresConfronto();
    inimigo.fichaHabilidade();
    stop();

    while (!finalConfronto) {

        if (personagem.getVida() > 0) {

            if (inimigo.getVida() > 0) {
                clear()
                mostrarInfoCombate(personagem, inimigo);
                escolhasCombate(personagem);
                option = Number(ask.question());

                switch (option) {

                    case 1: // atacar

                        clear()
                        personagem.atacar(inimigo);
                        stop();

                        // if especifico de ataque do rei ossos, porque ele pode ter vida zero e ressurgir novamente
                        if (inimigo instanceof ReiOssos) {

                            if (!inimigo.getRessurgir()) {
                                clear();
                                inimigo.atacar(personagem);
                                break; //parar while codigo caso o rei ossos atacar 1x já
                            }

                        }

                        // If para que caso o inimigo morrer com o meu ataque, ele nao me contra atacar
                        if (inimigo.getVida() > 0) {

                            clear();
                            inimigo.atacar(personagem);

                        }

                        break;

                    case 2: // Abrir inventário

                        personagem.mostrarInventario();
                        option = Number(ask.question());

                        switch (option) {

                            case 1:
                                clear()
                                const pocao = personagem.escolherPocao();

                                if (pocao !== null) {
                                    clear()
                                    personagem.tomarPocao(pocao);
                                    // stop();
                                }
                                break;

                            case 2:
                                //Apenas faz voltar para o menu
                                break;

                            default:
                                clear()
                                red('Opcao invalida!');
                                stop()
                                break;
                        }

                        break;

                    case 3: // usar especial e setar o useiEspecial true
                        clear();
                        personagem.usarAtaqueEspecial(inimigo); // inimigo com certeza vai morrer
                        stop();
                        break;

                    default:
                        red('Opcao inválida');
                        stop();
                        break;
                }

            } else {

                clear();
                arteInimigoDerrotado();      // Arte de inimigo derrotado
                personagem.setReputacao(10); // ao vencer confronto, ganha reputação
                personagem.setOuro(20);      // ao vencer confronto, ganha ouro
                yellow(`+20 OURO PELA VITÓRIA DO COMBATE`);
                finalConfronto = true;
                stop();

            }

        } else {

            clear();
            arteVoceMorreu(); // Arte de morte
            process.exit();

        }
    }
}