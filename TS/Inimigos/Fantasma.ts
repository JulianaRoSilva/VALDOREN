//Chance de ignorar completamente um ataque

import { stop } from "../Auxiliares/Auxiliares";
import { blue, red } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "../Personagens/Personagem";

export class Fantasma implements Inimigo {
    private nome: string = 'Fantasma do Clerigo';
    private vida: number = 50;
    private ataque: number = 15;
    private defesa: number = 3;
    private habilidade: string = 'Esquiva';

    public getNome(): string {
        return this.nome
    }

    public getVida(): number {
        return this.vida
    }

    public getAtaque(): number {
        return this.ataque
    }

    public getDefesa(): number {
        return this.defesa
    }

    public getHabilidade(): string {
        return this.habilidade
    }

    public fichaHabilidade(): void {
        red(`
O inimigo que voce irá combater tem o seguinte especial:
Com uma chance de 40%, esse inimigo poderá se esquivar totalmente do dano do seu ataque.        
        `);
    }

    //Método de ataque.
    public atacar(personagem: Personagem): void {

        const danoFinal: number = Math.floor(Math.random() * this.ataque) + 1; // calculo o dano aleatorio 
        red(`
    ATAQUE DO INIMIGO:        
    ╔════════════════════════════════════════╗
    ║                ATAQUE                  ║
    ╠════════════════════════════════════════╣
    ║                                        ║
    ║ ${this.nome}                   
    ║ atacou ${personagem.getNome()}            
    ║                                        ║
    ║ DANO EFETIVO : ${String(danoFinal).padEnd(23)} 
    ║                                        ║
    ║                                        ║
    ╚════════════════════════════════════════╝
            `)
            stop()
        personagem.tomarDano(danoFinal); // executo o dano no inimigo

    }

    public tomarDano(dano: number): number { // coloquei aqui a possibilidade de esquiva do fantasma 

        const chance: number = Math.random(); // controlar a chance do personagem se esquivar do dano!
        const defesaAleatoria = Math.floor(Math.random() * (this.defesa + 1)); // defesa aleatória

        // o max me retorna o maior valor entre os dois, se o dano por acaso ficar negativo, o dano será zerado
        const danoFinal = Math.max(0, dano - defesaAleatoria);


        if (chance < 0.40) {
            red(`    
    ╔═══════════════════════════════════════════════╗
    ║               INTANGIBILIDADE!                ║
    ╠═══════════════════════════════════════════════╣
    ║ ${String(this.nome).padEnd(45)} 
    ║                                               ║
    ║ ignorou completamente o ataque e se           ║
    ║ esquivou do dano recebido!                    ║
    ║                                               ║
    ║ CHANCE DE ESQUIVA : 30%                       ║
    ║                                               ║
    ╚═══════════════════════════════════════════════╝
        `)
        
        } else {

            this.vida -= danoFinal;

            blue(`
-- ----------------------------------------- --            
    ${this.nome.toUpperCase()} TOMOU DANO!
    Dano recebido: ${dano}
    Defesa: ${defesaAleatoria}
    Dano efetivo recebido: ${danoFinal}
-- ----------------------------------------- -- 
        `)
        

        }

        if (this.vida < 0) {
            this.vida = 0;
            return dano;
        }
        return dano;
    }


    //Mostrar dados do inimigo
    public fichaInimigo(): void {
        red(`
    ╔════════════════════════════════════════╗
    ║                 INIMIGO                ║
    ╠════════════════════════════════════════╣
    ║                                        ║
    ║ NOME        : ${String(this.nome).padEnd(23)}  
    ║ VIDA        : ${String(this.vida).padEnd(23)}  
    ║ ATAQUE      : ${String(this.ataque).padEnd(23)}  
    ║ DEFESA      : ${String(this.defesa).padEnd(23)}  
    ║ HABILIDADE  : ${String(this.habilidade).padEnd(23)}  
    ║                                        ║
    ╚════════════════════════════════════════╝
`);
    }
}
