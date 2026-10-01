import { clear, lojaMostrarArmaduras, lojaMostrarPocoes, lojaMostrarUpArma, stop } from "../Auxiliares/Auxiliares";
import { blue, red, yellow } from "../Auxiliares/Cores";
import { Personagem } from "../Personagens/Personagem";
import { Arma } from "./Arma";
import { Armadura } from "./Armadura";
import { Pocao } from "./Pocao";
import { EfeitoPocao } from "./TiposENUMs";

const ask = require('readline-sync');

export function loja(personagem: Personagem): void {

    let option: number;
    let sairLoop: boolean = false;


    while (!sairLoop) {

        clear()
        if (personagem.getOuro() > 0) {


            yellow(`
    OURO DISPONÍVEL: ${personagem.getOuro()} 
                
    ╔══════════════════════════════════════╗
    ║        ARMAZEM DO ELFO LUCIO         ║
    ╠══════════════════════════════════════╣
    ║  Bem-vindo, aventureiro!             ║
    ║  Em que posso te ajudar?             ║
    ╠══════════════════════════════════════╣
    ║  1 - Ver equipamentos                ║
    ║  2 - Melhorar arma                   ║
    ║  3 - Poções                          ║
    ║  4 - Sair da loja                    ║
    ╚══════════════════════════════════════╝
            `);

            option = Number(ask.question());

            switch (option) {

                case 1: // Ver equipamentos OK

                    clear();

                    yellow(`SEU OURO: ${personagem.getOuro()}`);

                    lojaMostrarArmaduras();
                    option = Number(ask.question());

                    switch (option) {
                        case 1:

                            if (personagem.possuiItem('Armadura de Couro')) {

                                clear()
                                red(`Você já possui a Armadura de Couro!`);
                                stop();

                            } else if (personagem.getOuro() >= 25) {

                                personagem.adicionaInventario(
                                    new Armadura('Armadura de Couro', 5)
                                );

                                personagem.setDefesa(5);
                                personagem.setOuro(-25);

                                clear();
                                blue(`Armadura de Couro comprada! +5 de defesa`);
                                red(`-25 DE OURO!`);
                                stop();

                            } else {

                                clear();
                                red(`Sem dinheiro suficiente para comprar essa armadura!`);
                                stop();
                            }

                            break;

                        case 2:

                            if (personagem.possuiItem('Cota de Malha')) {

                                clear()
                                red(`Você já possui a Cota de Malha!`);
                                stop();

                            } else if (personagem.getOuro() >= 50) {

                                personagem.adicionaInventario(
                                    new Armadura('Cota de Malha', 10)
                                );

                                personagem.setDefesa(10);
                                personagem.setOuro(-50);

                                clear();
                                blue(`Cota de Malha comprada! +10 de defesa`);
                                red(`-50 DE OURO!`);
                                stop();

                            } else {

                                clear();
                                red(`Sem dinheiro suficiente para comprar essa armadura!`);
                                stop();
                            }

                            break;

                        case 3:

                            if (personagem.possuiItem('Armadura de Aço')) {

                                clear()
                                red(`Você já possui a Armadura de Aço!`);
                                stop();

                            } else if (personagem.getOuro() >= 85) {

                                personagem.adicionaInventario(
                                    new Armadura('Armadura de Aço', 20)
                                );

                                personagem.setDefesa(20);
                                personagem.setOuro(-85);

                                clear();
                                blue(`Armadura de Aço comprada! +20 de defesa!`);
                                red(`-85 DE OURO!`);
                                stop();

                            } else {

                                clear()
                                red(`Sem dinheiro suficiente para comprar essa armadura!`);
                                stop();
                            }

                            break;

                        case 4: // Voltar pro Menu. não faz nada

                            break;

                        default:
                            clear()
                            red(`Opção inválida!`);
                            stop();
                    }

                    break;

                case 2: // Melhorar arma

                    clear();
                    yellow(`SEU OURO: ${personagem.getOuro()}`);
                    lojaMostrarUpArma();
                    option = Number(ask.question());

                    switch (option) {
                        case 1:
                            if (personagem.getOuro() >= 100) {

                                for (let item of personagem.getInventario()) {
                                    if (item instanceof Arma) {

                                        item.setNivel();
                                        personagem.setOuro(-100);
                                        personagem.setAtaque(5);

                                        clear();
                                        blue(`Sua arma '${item.getNome()}' foi upada para o nível ${item.getNivel()}`);
                                        blue(`Ataque aumentado em +5`)
                                        stop();
                                        break;
                                    }
                                }
                            } else {
                                clear()
                                red(`Voce não tem Ouro suficiente para aumentar o nível da sua arma!`);
                                stop();
                            }

                            break;

                        case 2:
                            // só volta para o menu
                            break;

                        default:
                            clear();
                            red(`Opção inválida!`);
                            stop();
                            break;
                    }

                    break;

                case 3: // Poções

                    clear();
                    yellow(`SEU OURO: ${personagem.getOuro()}`);
                    lojaMostrarPocoes();
                    option = Number(ask.question());

                    switch (option) {
                        case 1: // Poção de Cura Menor +10

                            if (personagem.getOuro() >= 20) {

                                personagem.adicionaInventario(
                                    new Pocao(
                                        'Poção de Cura Menor',
                                        10,
                                        EfeitoPocao.CURA
                                    )
                                );

                                personagem.setOuro(-20);

                                clear();
                                blue(`Poção de Cura Menor comprada!`);
                                red(`-20 DE OURO!`);
                                stop();

                            } else {

                                clear()
                                red(`Sem dinheiro suficiente para comprar essa poção!`);
                                stop();
                            }

                            break;

                        case 2: // Poção de Cura Maior +20

                            if (personagem.getOuro() >= 35) {

                                personagem.adicionaInventario(
                                    new Pocao(
                                        'Poção de Cura Maior',
                                        20,
                                        EfeitoPocao.CURA
                                    )
                                );

                                personagem.setOuro(-35);

                                clear();
                                blue(`Poção de Cura Maior comprada!`);
                                red(`-35 DE OURO!`);
                                stop();

                            } else {

                                clear()
                                red(`Sem dinheiro suficiente para comprar essa poção!`);
                                stop();
                            }

                            break;

                        case 3: // Poção de Força Menor +10 ataque

                            if (personagem.getOuro() >= 30) {

                                personagem.adicionaInventario(
                                    new Pocao(
                                        'Poção de Força Menor',
                                        10,
                                        EfeitoPocao.FORCA
                                    )
                                );

                                personagem.setOuro(-30);

                                clear();
                                blue(`Poção de Força Menor comprada!`);
                                red(`-30 DE OURO!`);
                                stop();

                            } else {
                                clear()
                                red(`Sem dinheiro suficiente para comprar essa poção!`);
                                stop();
                            }

                            break;

                        case 4: // Poção de Força Maior +15 ataque

                            if (personagem.getOuro() >= 45) {

                                personagem.adicionaInventario(
                                    new Pocao('Poção de Força Maior', 15, EfeitoPocao.FORCA)
                                );

                                personagem.setOuro(-45);

                                clear();
                                blue(`Poção de Força Maior comprada!`);
                                red(`-45 DE OURO!`);
                                stop();

                            } else {
                                clear()
                                red(`Sem dinheiro suficiente para comprar essa poção!`);
                                stop();
                            }

                            break;

                        case 5: // Retornar
                            break;


                        default:
                            red(`Opção inválida!`);
                            stop();
                            break;
                    }

                    break; // FINAL DO CASE 3 RAIZ 

                case 4: // Sair loja
                    sairLoop = true;
                    break;

                default:
                    clear();
                    red(`Opções inválida!`);
                    stop();
                    break;

            }
        } else {
            yellow(`
    ╔══════════════════════════════════════╗
    ║        ARMAZEM DO ELFO LUCIO         ║
    ╠══════════════════════════════════════╣
    ║  Me parece que seu ouro acabou...    ║
    ║                                      ║
    ║  Volte em outro momento para que     ║
    ║  possamos fazer negócios!            ║
    ╚══════════════════════════════════════╝
            
    `);
            stop();
            sairLoop = true;

        } // final IF
    } // Final LOOP
} // Final Método