"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loja = loja;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
const Arma_1 = require("./Arma");
const Armadura_1 = require("./Armadura");
const Pocao_1 = require("./Pocao");
const TiposENUMs_1 = require("./TiposENUMs");
const ask = require('readline-sync');
function loja(personagem) {
    let option;
    let sairLoop = false;
    while (!sairLoop) {
        (0, Auxiliares_1.clear)();
        if (personagem.getOuro() > 0) {
            (0, Cores_1.yellow)(`
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
                    (0, Auxiliares_1.clear)();
                    (0, Cores_1.yellow)(`SEU OURO: ${personagem.getOuro()}`);
                    (0, Auxiliares_1.lojaMostrarArmaduras)();
                    option = Number(ask.question());
                    switch (option) {
                        case 1:
                            if (personagem.possuiItem('Armadura de Couro')) {
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.red)(`Você já possui a Armadura de Couro!`);
                                (0, Auxiliares_1.stop)();
                            }
                            else if (personagem.getOuro() >= 25) {
                                personagem.adicionaInventario(new Armadura_1.Armadura('Armadura de Couro', 5));
                                personagem.setDefesa(5);
                                personagem.setOuro(-25);
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.blue)(`Armadura de Couro comprada! +5 de defesa`);
                                (0, Cores_1.red)(`-25 DE OURO!`);
                                (0, Auxiliares_1.stop)();
                            }
                            else {
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.red)(`Sem dinheiro suficiente para comprar essa armadura!`);
                                (0, Auxiliares_1.stop)();
                            }
                            break;
                        case 2:
                            if (personagem.possuiItem('Cota de Malha')) {
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.red)(`Você já possui a Cota de Malha!`);
                                (0, Auxiliares_1.stop)();
                            }
                            else if (personagem.getOuro() >= 50) {
                                personagem.adicionaInventario(new Armadura_1.Armadura('Cota de Malha', 10));
                                personagem.setDefesa(10);
                                personagem.setOuro(-50);
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.blue)(`Cota de Malha comprada! +10 de defesa`);
                                (0, Cores_1.red)(`-50 DE OURO!`);
                                (0, Auxiliares_1.stop)();
                            }
                            else {
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.red)(`Sem dinheiro suficiente para comprar essa armadura!`);
                                (0, Auxiliares_1.stop)();
                            }
                            break;
                        case 3:
                            if (personagem.possuiItem('Armadura de Aço')) {
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.red)(`Você já possui a Armadura de Aço!`);
                                (0, Auxiliares_1.stop)();
                            }
                            else if (personagem.getOuro() >= 85) {
                                personagem.adicionaInventario(new Armadura_1.Armadura('Armadura de Aço', 20));
                                personagem.setDefesa(20);
                                personagem.setOuro(-85);
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.blue)(`Armadura de Aço comprada! +20 de defesa!`);
                                (0, Cores_1.red)(`-85 DE OURO!`);
                                (0, Auxiliares_1.stop)();
                            }
                            else {
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.red)(`Sem dinheiro suficiente para comprar essa armadura!`);
                                (0, Auxiliares_1.stop)();
                            }
                            break;
                        case 4: // Voltar pro Menu. não faz nada
                            break;
                        default:
                            (0, Auxiliares_1.clear)();
                            (0, Cores_1.red)(`Opção inválida!`);
                            (0, Auxiliares_1.stop)();
                    }
                    break;
                case 2: // Melhorar arma
                    (0, Auxiliares_1.clear)();
                    (0, Cores_1.yellow)(`SEU OURO: ${personagem.getOuro()}`);
                    (0, Auxiliares_1.lojaMostrarUpArma)();
                    option = Number(ask.question());
                    switch (option) {
                        case 1:
                            if (personagem.getOuro() >= 100) {
                                for (let item of personagem.getInventario()) {
                                    if (item instanceof Arma_1.Arma) {
                                        item.setNivel();
                                        personagem.setOuro(-100);
                                        personagem.setAtaque(5);
                                        (0, Auxiliares_1.clear)();
                                        (0, Cores_1.blue)(`Sua arma '${item.getNome()}' foi upada para o nível ${item.getNivel()}`);
                                        (0, Cores_1.blue)(`Ataque aumentado em +5`);
                                        (0, Auxiliares_1.stop)();
                                        break;
                                    }
                                }
                            }
                            else {
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.red)(`Voce não tem Ouro suficiente para aumentar o nível da sua arma!`);
                                (0, Auxiliares_1.stop)();
                            }
                            break;
                        case 2:
                            // só volta para o menu
                            break;
                        default:
                            (0, Auxiliares_1.clear)();
                            (0, Cores_1.red)(`Opção inválida!`);
                            (0, Auxiliares_1.stop)();
                            break;
                    }
                    break;
                case 3: // Poções
                    (0, Auxiliares_1.clear)();
                    (0, Cores_1.yellow)(`SEU OURO: ${personagem.getOuro()}`);
                    (0, Auxiliares_1.lojaMostrarPocoes)();
                    option = Number(ask.question());
                    switch (option) {
                        case 1: // Poção de Cura Menor +10
                            if (personagem.getOuro() >= 20) {
                                personagem.adicionaInventario(new Pocao_1.Pocao('Poção de Cura Menor', 10, TiposENUMs_1.EfeitoPocao.CURA));
                                personagem.setOuro(-20);
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.blue)(`Poção de Cura Menor comprada!`);
                                (0, Cores_1.red)(`-20 DE OURO!`);
                                (0, Auxiliares_1.stop)();
                            }
                            else {
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.red)(`Sem dinheiro suficiente para comprar essa poção!`);
                                (0, Auxiliares_1.stop)();
                            }
                            break;
                        case 2: // Poção de Cura Maior +20
                            if (personagem.getOuro() >= 35) {
                                personagem.adicionaInventario(new Pocao_1.Pocao('Poção de Cura Maior', 20, TiposENUMs_1.EfeitoPocao.CURA));
                                personagem.setOuro(-35);
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.blue)(`Poção de Cura Maior comprada!`);
                                (0, Cores_1.red)(`-35 DE OURO!`);
                                (0, Auxiliares_1.stop)();
                            }
                            else {
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.red)(`Sem dinheiro suficiente para comprar essa poção!`);
                                (0, Auxiliares_1.stop)();
                            }
                            break;
                        case 3: // Poção de Força Menor +10 ataque
                            if (personagem.getOuro() >= 30) {
                                personagem.adicionaInventario(new Pocao_1.Pocao('Poção de Força Menor', 10, TiposENUMs_1.EfeitoPocao.FORCA));
                                personagem.setOuro(-30);
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.blue)(`Poção de Força Menor comprada!`);
                                (0, Cores_1.red)(`-30 DE OURO!`);
                                (0, Auxiliares_1.stop)();
                            }
                            else {
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.red)(`Sem dinheiro suficiente para comprar essa poção!`);
                                (0, Auxiliares_1.stop)();
                            }
                            break;
                        case 4: // Poção de Força Maior +15 ataque
                            if (personagem.getOuro() >= 45) {
                                personagem.adicionaInventario(new Pocao_1.Pocao('Poção de Força Maior', 15, TiposENUMs_1.EfeitoPocao.FORCA));
                                personagem.setOuro(-45);
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.blue)(`Poção de Força Maior comprada!`);
                                (0, Cores_1.red)(`-45 DE OURO!`);
                                (0, Auxiliares_1.stop)();
                            }
                            else {
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.red)(`Sem dinheiro suficiente para comprar essa poção!`);
                                (0, Auxiliares_1.stop)();
                            }
                            break;
                        case 5: // Retornar
                            break;
                        default:
                            (0, Cores_1.red)(`Opção inválida!`);
                            (0, Auxiliares_1.stop)();
                            break;
                    }
                    break; // FINAL DO CASE 3 RAIZ 
                case 4: // Sair loja
                    sairLoop = true;
                    break;
                default:
                    (0, Auxiliares_1.clear)();
                    (0, Cores_1.red)(`Opções inválida!`);
                    (0, Auxiliares_1.stop)();
                    break;
            }
        }
        else {
            (0, Cores_1.yellow)(`
    ╔══════════════════════════════════════╗
    ║        ARMAZEM DO ELFO LUCIO         ║
    ╠══════════════════════════════════════╣
    ║  Me parece que seu ouro acabou...    ║
    ║                                      ║
    ║  Volte em outro momento para que     ║
    ║  possamos fazer negócios!            ║
    ╚══════════════════════════════════════╝
            
    `);
            (0, Auxiliares_1.stop)();
            sairLoop = true;
        } // final IF
    } // Final LOOP
} // Final Método
