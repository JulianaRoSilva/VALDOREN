import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "../Personagens/Personagem";
import { blue, green, orange, purple, red, white, yellow } from "./Cores";

export const ask = require('readline-sync');

export const logger = console.log;

// Método para stopar a execução no terminal (Em roxo)
export function stop(): void {
    ask.question('\x1b[35mPressione ENTER para continuar...\x1b[0m')
}

// Método só para nao precisar sempre ficar digitando console.clear para limpar o terminal
export function clear(): void {
    console.clear();
}

export const consoleSaindo = (): void => {
    clear();  
    white(`
-------------------------------------------------------------------------------------- 
            ████  ███  ███ █   █ ████   ███    
            █ ░░░░█ ░░█  █░░██  █░█░░░█ █ ░░█   
             ███░░█████░ █░░█░█ █░█░░░█░█░ ░█░  
              ░░█ █░░░█░░█░░█░░██░█░░ █░█░░ █░░ 
            ████░░█░░░█░███░█░░ █░████ ░░███ ░░ 
             ░░░░ ░░░  ░░░░░ ░░  ░░░░░░ ░ ░░░ ░ 
              ░░░░  ░   ░ ░░░ ░   ░ ░░░░   ░░░ ...
-------------------------------------------------------------------------------------- 
    `);
}
export const tituloJogo = (): void => {
    clear();
    white(`
    ╔══════════════════════════════════════╗
    ║        O MISTÉRIO DE VALDOREN        ║
    ╚══════════════════════════════════════╝
    `);
    white('Antes de sua jornada começar, escolha quem você será nessa história.');
    stop();
};

export function consoleEspecial(): void {
    purple(`
--------------------------------------------------------------------------------------        
 ███  █████  ███   ███  █   █ █████    █████  ████ ████  █████  ███  ███  ███  █       
█ ░░█  ░█░░░█ ░░█ █ ░░█ █░  █░█░░░░░   █░░░░░█ ░░░░█░░░█ █░░░░░█ ░░░  █░░█ ░░█ █░      
█████░  █░░░█████░█░ ░█░█░░ █░████░░░  ████░░░███░░████░░████░░█░ ░░░ █░░█████░█░░     
█░░░█░░ █░░ █░░░█░█░░█ ░█░░ █░█░░░░    █░░░░   ░░█ █░░░░ █░░░░ █░░    █░░█░░░█░█░░     
█░░░█░░ █░░ █░░░█░░██ █ ░███ ░█████░   █████░████░░█░░░░░█████░ ███  ███░█░░░█░█████   
 ░░  ░░  ░░  ░░  ░░ ░░ ░  ░░░ ░░░░░░    ░░░░░ ░░░░ ░░░    ░░░░░  ░░░  ░░░ ░░  ░░░░░░░  
  ░   ░   ░   ░   ░  ░░ ░  ░░░  ░░░░░    ░░░░░ ░░░░  ░     ░░░░░  ░░░  ░░░ ░   ░ ░░░░░ 
--------------------------------------------------------------------------------------   
        `)
}

export function arteInicioConfronto(): void {
    blue(`
----------------------------------------------------------------------------------------------------    
 ███   ███  █   █ █████ ████   ███  █   █ █████  ███     ███ █   █ ███  ███  ███  ███  ████   ███    
█ ░░░ █ ░░█ ██  █░█░░░░░█░░░█ █ ░░█ ██  █░ ░█░░░█ ░░█     █░░██  █░ █░░█ ░░░  █░░█ ░░█ █░░░█ █ ░░█   
█░ ░░░█░ ░█░█░█ █░████░░████░░█░ ░█░█░█ █░░ █░░░█░ ░█░    █░░█░█ █░░█░░█░ ░░░ █░░█████░█░░░█░█░ ░█░  
█░░   █░░ █░█░░██░█░░░░ █░░█░ █░░ █░█░░██░░ █░░ █░░ █░░   █░░█░░██░░█░░█░░    █░░█░░░█░█░░ █░█░░ █░░ 
 ███   ███ ░█░░ █░█░░░░░█░░░█░ ███ ░█░░ █░░ █░░  ███ ░░  ███░█░░ █░███░ ███  ███░█░░░█░████ ░░███ ░░ 
  ░░░   ░░░ ░░░  ░░░░    ░░  ░  ░░░ ░░░  ░░  ░░   ░░░ ░   ░░░ ░░  ░░░░░  ░░░  ░░░ ░░  ░░░░░░ ░ ░░░ ░ 
   ░░░   ░░░  ░   ░ ░     ░   ░  ░░░  ░   ░   ░    ░░░     ░░░ ░   ░ ░░░  ░░░  ░░░ ░   ░ ░░░░   ░░░  
----------------------------------------------------------------------------------------------------
    `)
}

export function arteInimigoDerrotado(): void {
    green(`
---------------------------------------------------------------------------------------------                    
███ █   █ ███ █   █ ███  ███   ███     ████  █████ ████  ████   ███  █████  ███  ████   ███    
 █░░██  █░ █░░██ ██░ █░░█ ░░░ █ ░░█    █░░░█ █░░░░░█░░░█ █░░░█ █ ░░█  ░█░░░█ ░░█ █░░░█ █ ░░█   
 █░░█░█ █░░█░░█░█ █░░█░░█░ ██░█░ ░█░   █░░░█░████░░████░░████░░█░ ░█░  █░░░█████░█░░░█░█░ ░█░  
 █░░█░░██░░█░░█░░░█░░█░░█░░ █░█░░ █░░  █░░ █░█░░░░ █░░█░ █░░█░ █░░ █░░ █░░ █░░░█░█░░ █░█░░ █░░ 
███░█░░ █░███░█░░ █░███░ ███ ░░███ ░░  ████ ░█████░█░░░█░█░░░█░ ███ ░░ █░░ █░░░█░████ ░░███ ░░ 
 ░░░ ░░  ░░░░░ ░░  ░░░░░  ░░░ ░ ░░░ ░   ░░░░ ░░░░░░ ░░  ░ ░░  ░  ░░░ ░  ░░  ░░  ░░░░░░ ░ ░░░ ░ 
  ░░░ ░   ░ ░░░ ░   ░ ░░░  ░░░   ░░░     ░░░░  ░░░░░ ░   ░ ░   ░  ░░░    ░   ░   ░ ░░░░   ░░░ 
---------------------------------------------------------------------------------------------                     
                    `)
}

export function arteVoceMorreu(): void {
    red(`
--------------------------------------------------------------------
█   █  ███   ███  █████    █   █  ███  ████  ████  █████ █   █   
█░  █░█ ░░█ █ ░░░ █░░░░░   ██ ██░█ ░░█ █░░░█ █░░░█ █░░░░░█░  █░  
█░░ █░█░ ░█░█░ ░░░████░░░  █░█ █░█░ ░█░████░░████░░████░░█░░ █░░ 
 █░█ ░█░░ █░█░░   █░░░░    █░░░█░█░░ █░█░░█░ █░░█░ █░░░░ █░░ █░░ 
  █ ░ ░███ ░░███  █████░   █░░ █░░███ ░█░░░█░█░░░█░█████░ ███ ░░ 
   ░ ░  ░░░ ░ ░░░  ░░░░░    ░░  ░░ ░░░ ░░░  ░ ░░  ░ ░░░░░  ░░░ ░ 
    ░    ░░░   ░░░  ░░░░░    ░   ░  ░░░  ░   ░ ░   ░ ░░░░░  ░░░                  
--------------------- SUA JORNADA ACABOU ---------------------------
    `);
}

export function escolhasCombate(personagem: Personagem): void {
    if (personagem.getUsouAtaqueEspecial()) {
        green(`
=================================
    QUAL A SUA AÇÃO A SEGUIR?
=================================
1 - Ataque
2 - Abrir inventario

        `)

    } else {
        green(`
=================================
     QUAL A SUA AÇÃO A SEGUIR?
=================================
1 - Ataque
2 - Abrir inventario
3 - !!!! UTILIZAR ATAQUE ESPECIAL !!!!
            `)
    }
}

export function mostrarInfoCombate(personagem: Personagem, inimigo: Inimigo): void {

    yellow(`
╔═══════════════════════════════════╗     ╔═════════════════════════════════════════╗
║            PERSONAGEM             ║     ║                 INIMIGO                 ║
╠═══════════════════════════════════╣     ╠═════════════════════════════════════════╣
║                                   ║     ║                                         ║
║  NOME   : ${String(personagem.getNome()).padEnd(23)} ║     ║ NOME        : ${String(inimigo.getNome()).padEnd(23)}   ║
║  VIDA   : ${String(personagem.getVida()).padEnd(23)} ║     ║ VIDA        : ${String(inimigo.getVida()).padEnd(23)}   ║
║  ATAQUE : ${String(personagem.getAtaque()).padEnd(23)} ║     ║ ATAQUE      : ${String(inimigo.getAtaque()).padEnd(23)}   ║
║  DEFESA : ${String(personagem.getDefesa()).padEnd(23)} ║     ║ DEFESA      : ${String(inimigo.getDefesa()).padEnd(23)}   ║
║                                   ║     ║ HABILIDADE  : ${String(inimigo.getHabilidade()).padEnd(23)} 
║                                   ║     ║                                         ║
╚═══════════════════════════════════╝     ╚═════════════════════════════════════════╝
`);

}

export function infosConfronto(): void {
    blue(`
Informacoes do confronto

PERSONAGEM:
O dano causado pelo personagem é fixo, de acordo com seu valor de ataque. 
Porém, o dano efetivo pode variar conforme a defesa do inimigo.

Ao receber um ataque, sua defesa será calculada aleatoriamente, 
podendo variar de 0 até o valor máximo de sua defesa.     

INIMIGO:
Dano
O dano causado pelo inimigo é aleatório,
podendo variar de 0 até o valor máximo de seu ataque

A defesa do inimigo também é aleatória,
podendo variar de 0 até o valor máximo de sua defesa.

Boa sorte, aventureiro!
Cada confronto pode ser diferente.
Use suas habilidades com estratégia.
        `)
}

export function lojaMostrarArmaduras(): void {
    green(`
ARMADURAS DISPONÍVEIS

1 - Armadura de Couro
    Defesa: +5
    Preço: 25 ouro

2 - Cota de Malha
    Defesa: +10
    Preço: 50 ouro

3 - Armadura de Aço
    Defesa: +20
    Preço: 85 ouro

4 - Voltar    
    `)
}

export function lojaMostrarUpArma(): void {

    yellow(`
    APRIMORAMENTO DA ARMA

    Aumentar o nível da arma
    Custo: 100 moedas de ouro

    "Uma lâmina bem forjada pode decidir
    o destino de uma batalha."

    1 - Forjar aprimoramento
    2 - Voltar ao Menu
    `)
}

export function lojaMostrarPocoes(): void {
    yellow(`
        POÇÕES DE CURA

        1 - Poção de Cura Menor
            Restaura 10 de vida
            Preço: 20 moedas de ouro

        2 - Elixir de Cura Maior
            Restaura 20 de vida
            Preço: 35 moedas de ouro

        POÇÕES DE FORÇA

        3 - Elixir de Força Menor
            Aumenta 10 de ataque
            Preço: 35 moedas de ouro

        4 - Elixir de Força Maior
            Aumenta 15 de ataque
            Preço: 45 moedas de ouro

        ──────────────────────────────────────────

        5 - Retornar
        
        `);
}

export function arteCriaPersonagem(): void {
    orange(`
 ███  ████  ███  ███   ███   ███   ███     ████  █████ ████   ████  ███  █   █  ███   ███  █████ █   █   
█ ░░░ █░░░█  █░░█ ░░█ █ ░░░ █ ░░█ █ ░░█    █░░░█ █░░░░░█░░░█ █ ░░░░█ ░░█ ██  █░█ ░░█ █ ░░░ █░░░░░██ ██░  
█░ ░░░████░░ █░░█████░█░ ░░░█████░█░ ░█░   ████░░████░░████░░ ███░░█░ ░█░█░█ █░█████░█░ ██░████░░█░█ █░░ 
█░░   █░░█░ ░█░░█░░░█░█░░   █░░░█░█░░ █░░  █░░░░ █░░░░ █░░█░ ░ ░░█ █░░ █░█░░██░█░░░█░█░░ █░█░░░░ █░░░█░░ 
 ███  █░░░█░███░█░░░█░░███  █░░░█░░███ ░░  █░░░░░█████░█░░░█░████░░ ███ ░█░░ █░█░░░█░░███ ░█████░█░░ █░░ 
  ░░░  ░░  ░ ░░░ ░░  ░░ ░░░  ░░  ░░ ░░░ ░   ░░    ░░░░░ ░░  ░ ░░░░ ░ ░░░ ░░░  ░░░░  ░░ ░░░ ░░░░░░ ░░  ░░ 
   ░░░  ░   ░ ░░░ ░   ░  ░░░  ░   ░  ░░░     ░     ░░░░░ ░   ░ ░░░░   ░░░  ░   ░ ░   ░  ░░░  ░░░░░ ░   ░         
        `);
}

export function arteInfoJogo(): void {

    yellow(`
╔══════════════════════════════════════════════════════════╗
║                    COMO FUNCIONA O JOGO                  ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  VALDOREN é uma aventura baseada em escolhas.            ║
║                                                          ║
║  Durante sua jornada, suas decisões irão alterar o       ║
║  caminho da história e poderão levar a diferentes        ║
║  acontecimentos e finais.                                ║
║                                                          ║
║  ⚔ BATALHAS                                              
║  Você encontrará inimigos durante sua jornada.           ║
║  Nos confrontos, poderá atacar, utilizar poções e        ║
║  habilidades especiais para sobreviver.                  ║
║                                                          ║
║                                                          ║
║  💰 OURO                                                 
║  O ouro encontrado durante sua jornada poderá ser        ║
║  utilizado para melhorar seu personagem.                 ║
║                                                          ║
║  Você poderá utilizá-lo para comprar:                    ║
║    • Armaduras                                           ║
║    • Poções                                              ║
║    • Melhorias para sua arma                             ║
║                                                          ║
║  Quanto melhor preparado você estiver, maiores serão     ║
║  suas possibilidades durante os confrontos.              ║
║                                                          ║
║  ⭐ REPUTAÇÃO                                             
║  Suas escolhas também irão alterar sua reputação.        ║
║                                                          ║
║  Dependendo do nível de reputação alcançado durante      ║
║  sua jornada, determinadas possibilidades poderão        ║
║  ser desbloqueadas, incluindo novos finais.              ║
║                                                          ║
║  ⚠ SUAS ESCOLHAS IMPORTAM                               
║  Não existe apenas um caminho para chegar ao fim.        ║
║                                                          ║
║  Suas decisões, seu ouro, sua reputação e sua            ║
║  preparação para os confrontos irão acompanhar você      ║
║  durante toda a aventura.                                ║
║                                                          ║
║              ESCOLHA COM SABEDORIA...                    ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
`);



}