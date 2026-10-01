// método para criar personagem na Main. Ele vai retornar um Personagem para eu abrigar em uma variável na Main e usar ele no jogo todo

import { arteCriaPersonagem, ask, clear, stop } from "../Auxiliares/Auxiliares";
import { green, red, yellow } from "../Auxiliares/Cores";
import { Bardo } from "./Bardo";
import { Berserker } from "./Berserker";
import { Cacador } from "./Cacador";
import { Cavaleiro } from "./Cavaleiro";
import { Clerigo } from "./Clerigo";
import { Mago } from "./Mago";
import { Necromante } from "./Necromante";
import { Paladino } from "./Paladino";
import { Personagem } from "./Personagem";

export function criaPersonagem(): Personagem {

    let nome: string = '';
    let personagem: Personagem;

    clear();
    arteCriaPersonagem();
    stop();

    while (true) {

        clear();

        // Arte compactada para caber no terminal sem colocar o cursor pra cima e nao bugar tudo
        yellow(`
╔══════════════════════════════════════════════════════════════════╗
║                       ESCOLHA SUA CLASSE                         ║
╠══════════════════════════════════════════════════════════════════╣
║ 1 - BARDO - Equilibrado          | HP: 150 | Atq: 18 | Def: 8    ║
║     Arma: Alaúde Encantado                                       ║
║                                                                  ║
║ 2 - BERSERKER - Força e fúria    | HP: 150 | Atq: 12 | Def: 5    ║
║     Arma: Machado de Guerra                                      ║
║                                                                  ║
║ 3 - CAÇADOR - Precisão           | HP: 120 | Atq: 25 | Def: 5    ║
║     Arma: Arco Élfico                                            ║
║                                                                  ║
║ 4 - CAVALEIRO - Armadura         | HP: 100 | Atq: 18 | Def: 18   ║
║     Arma: Espada Longa                                           ║
║                                                                  ║
║ 5 - CLÉRIGO - Proteção sagrada   | HP: 100 | Atq: 10 | Def: 20   ║
║     Arma: Espada Sagrada                                         ║
║                                                                  ║
║ 6 - MAGO - Poder arcano          | HP: 120 | Atq: 25 | Def: 2    ║
║     Arma: Cajado Arcano                                          ║
║                                                                  ║
║ 7 - NECROMANTE - Artes sombrias  | HP: 130 | Atq: 20 | Def: 10   ║
║     Arma: Foice das Almas                                        ║
║                                                                  ║
║ 8 - PALADINO - Fé e juramento    | HP: 100 | Atq: 15 | Def: 5    ║
║     Arma: Espada Sagrada                                         ║
╚══════════════════════════════════════════════════════════════════╝
`);

        const opcao = ask.question('Escolha sua classe: ');

        // Primeiro escolhe a classe
        switch (opcao) {

            case '1':
                personagem = new Bardo('');
                break;

            case '2':
                personagem = new Berserker('');
                break;

            case '3':
                personagem = new Cacador('');
                break;

            case '4':
                personagem = new Cavaleiro('');
                break;

            case '5':
                personagem = new Clerigo('');
                break;

            case '6':
                personagem = new Mago('');
                break;

            case '7':
                personagem = new Necromante('');
                break;

            case '8':
                personagem = new Paladino('');
                break;

            default:
                clear();
                red('Opção inválida!');
                stop();
                continue; // Faz o while rodar novamente automaticamente
        }

        // Mostra as informações da classe escolhida
        clear();
        personagem.fichaPersonagem();

        yellow(`
Deseja confirmar esta classe?

1 - Confirmar
2 - Escolher outra classe
`);

        const confirmarClasse = ask.questionInt('Escolha: ');

        if (confirmarClasse === 2) {
            continue;
        }

        if (confirmarClasse !== 1) {
            clear();
            red('Opção inválida!');
            stop();
            continue;
        }

        // Depois que a classe foi confirmada, pede o nome
        while (true) {

            clear();
            personagem.fichaPersonagem();

            green('Digite o nome do seu personagem: ');
            nome = ask.question();

            clear()
            yellow(`
Nome escolhido: ${nome}

Deseja confirmar?

1 - SIM
2 - DIGITAR NOVAMENTE
`);

            const confirmarNome = Number(ask.question().toUpperCase());

            if (confirmarNome === 1) {
                break; // para de executar autoamticamente o while
            }

            if (confirmarNome !== 2) {
                clear();
                red('Opção inválida!');
                stop();
            }
        }

        // Agora cria o personagem definitivamente com o nome
        switch (opcao) {

            case 1:
                personagem = new Bardo(nome);
                break;

            case 2:
                personagem = new Berserker(nome);
                break;

            case 3:
                personagem = new Cacador(nome);
                break;

            case 4:
                personagem = new Cavaleiro(nome);
                break;

            case 5:
                personagem = new Clerigo(nome);
                break;

            case 6:
                personagem = new Mago(nome);
                break;

            case 7:
                personagem = new Necromante(nome);
                break;

            case 8:
                personagem = new Paladino(nome);
                break;
        }

        clear();
        green(`PERSONAGEM FINAL PARA O JOGO: `)
        personagem.fichaPersonagem();
        stop();

        return personagem;
    }
}