//Boss para o game

import { stop } from "../Auxiliares/Auxiliares";
import { blue, red, yellow } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "../Personagens/Personagem";

/*COMENTÁRIOS
Fiz um atributo especial para esse inimigo 
*/

export class ReiOssos implements Inimigo {
    private nome: string = 'Rei dos Ossos';
    private vida: number = 100;
    private ataque: number = 40;
    private defesa: number = 15;
    private habilidade: string = 'Conversão vida em Ataque'
    private ressurgir: boolean = false;


    getNome(): string {
        return this.nome
    }

    getVida(): number {
        return this.vida
    }

    getAtaque(): number {
        return this.ataque
    }

    getDefesa(): number {
        return this.defesa
    }

    public getHabilidade(): string {
        return this.habilidade
    }

    public getRessurgir(): boolean {
        return this.ressurgir
    }

    // Método utilizado no inicio do combate em cada confronto
    public fichaHabilidade(): void {
        red(`
O inimigo que voce ira combater tem o seguinte especial:
Após ele ser derrotado, irá ressurgir novamente para um novo combate.       
        `)
    }

    public tomarDano(dano: number): number {

        const defesaAleatoria = Math.floor(Math.random() * (this.defesa + 1)); // defesa aleatória

        // o max me retorna o maior valor entre os dois, se o dano por acaso ficar negativo, o dano será zerado
        const danoFinal = Math.max(0, dano - defesaAleatoria);

        this.vida -= danoFinal;

        blue(`
-- ----------------------------------------- --        
    ${this.nome.toUpperCase()} TOMOU DANO!
    Dano recebido: ${dano}
    Defesa: ${defesaAleatoria}
    Dano efetivo recebido: ${danoFinal}
-- ----------------------------------------- --    
        `)

        if (this.vida < 0) {
            this.vida = 0;
            return dano;
        }
        return dano;
    }

    //Método de ataque. 
    public atacar(personagem: Personagem): void {
        let danoFinal: number;
        
        //Condição de ressurgir novamente
        if(this.vida <= 0 && !this.ressurgir) {  
            this.vida = 100;
            this.ressurgir = true;
            danoFinal = Math.floor(Math.random() * this.ataque) + 1; // cálculo aleatório do dado do inimigo

            red(`
    ╔════════════════════════════════════════╗
    ║              ESPECIAL!                 ║
    ╠════════════════════════════════════════╣
    ║                                        ║
    ║ ${this.nome.toUpperCase().padEnd(38)} 
    ║ RESSURGIU DOS MORTOS                  
    ║                                        
    ║ VIDA RECUPERADA: ${this.vida}/100                 
    ║ ATAQUE ATUAL     : ${String(this.ataque).padEnd(17)}   
    ║                                        ║
    ╚════════════════════════════════════════╝
             `);
            personagem.tomarDano(danoFinal); // personagem tomando dano 
            stop()
            
        } else {
            danoFinal = Math.floor(Math.random() * this.ataque) + 1; // Calculo o dano final de acordo com a variante da minha chance de especial

            red(`
    ATAQUE DO INIMIGO:        
    ╔═══════════════════════════════════════════════╗
    ║                 ATAQUE                        ║
    ╠═══════════════════════════════════════════════╣
    ║                                               ║
    ║ ${this.nome} atacou                           
    ║                                               ║
    ║ DANO ENVIADO  : ${String(danoFinal).padEnd(27)}
    ║                                               ║
    ╚═══════════════════════════════════════════════╝
            `)

            personagem.tomarDano(danoFinal); // personagem tomando dano 
            stop()
            }   
    };

    //Mostrar dados do inimigo
    fichaInimigo(): void {
        red(`      
    ╔═════════════════════════════════════════╗
    ║                 INIMIGO                 ║
    ╠═════════════════════════════════════════╣
    ║                                         ║
    ║ NOME        : ${String(this.nome).padEnd(23)}   
    ║ VIDA        : ${String(this.vida).padEnd(23)}   
    ║ ATAQUE      : ${String(this.ataque).padEnd(23)}   
    ║ DEFESA      : ${String(this.defesa).padEnd(23)}   
    ║ HABILIDADE  : ${String(this.habilidade).padEnd(23)} 
    ║                                         ║
    ╚═════════════════════════════════════════╝
        `);
    }
}