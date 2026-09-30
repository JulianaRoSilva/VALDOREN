//Chance de roubar ouro do personagem em vez de atacar
import { stop } from "../Auxiliares/Auxiliares";
import { blue, red, yellow } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "../Personagens/Personagem";

export class Saqueador implements Inimigo {
    private nome: string = 'Saqueador do Cemiterio';
    private vida: number = 55;
    private ataque: number = 10;
    private defesa: number = 2;
    private habilidade: string = 'Roubo Rapido';

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
O inimigo que voce ira combater tem o seguinte especial:
Com uma chance de 10%, esse inimigo pode roubar parte do seu ouro
em vez de atacar normalmente.        
        `);
    }

    public tomarDano(dano: number): number {

        const defesaAleatoria = Math.floor(Math.random() * (this.defesa + 1));
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

        const chance: number = Math.random();

        if (chance < 0.10) { // 10% de chance de roubar ouro em vez de atacar
            this.usarHabilidade(personagem);
            stop();
            return;
        }

        const danoFinal: number = Math.floor(Math.random() * this.ataque) + 1;
        red(`
    ATAQUE DO INIMIGO:
    ╔═════════════════════════════════════════════╗
    ║                    ATAQUE                   ║
    ╠═════════════════════════════════════════════╣
    ║                                             ║
    ║ ${this.nome} atacou ${personagem.getNome()}!
    ║                                             ║
    ║ DANO CAUSADO  : ${danoFinal}                
    ║                                             ║
    ╚═════════════════════════════════════════════╝`)
        personagem.tomarDano(danoFinal);
        stop();
    }

    //Método de habilidade do inimigo
    public usarHabilidade(personagem: Personagem): void {

        const ouroRoubado: number = Math.floor(Math.random() * 8) + 3; // rouba entre 3 e 10 de ouro
        const ouroDisponivel: number = personagem.getOuro();
        const valorRealRoubado: number = Math.min(ouroDisponivel, ouroRoubado);

        personagem.setOuro(-valorRealRoubado);

        red(`
    ╔═════════════════════════════════════════════╗
    ║             HABILIDADE ESPECIAL             ║
    ╠═════════════════════════════════════════════╣
    ║                                             ║
    ║ ${this.nome} ativou ROUBO RAPIDO!      
    ║                                             ║
    ║ OURO ROUBADO  : ${valorRealRoubado}                
    ║ OURO RESTANTE : ${personagem.getOuro()}
    ║                                             ║
    ║ NENHUM ATAQUE REALIZADO                     ║
    ║                                             ║
    ╚═════════════════════════════════════════════╝
        `);
        
    }

    //Mostrar dados do inimigo
    public fichaInimigo(): void {
        yellow(`
        ╔════════════════════════════════════════╗
        ║                 INIMIGO                ║
        ╠════════════════════════════════════════╣
        ║                                        ║
        ║ NOME        : ${this.nome}             
        ║ VIDA        : ${this.vida}             
        ║ ATAQUE      : ${this.ataque}           
        ║ DEFESA      : ${this.defesa}           
        ║ HABILIDADE  : ${this.habilidade}       
        ║                                        ║
        ╚════════════════════════════════════════╝
        `);
    }
}