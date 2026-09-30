"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Saqueador = void 0;
//Chance de roubar ouro do personagem em vez de atacar
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
class Saqueador {
    nome = 'Saqueador do Cemiterio';
    vida = 55;
    ataque = 10;
    defesa = 2;
    habilidade = 'Roubo Rapido';
    getNome() {
        return this.nome;
    }
    getVida() {
        return this.vida;
    }
    getAtaque() {
        return this.ataque;
    }
    getDefesa() {
        return this.defesa;
    }
    getHabilidade() {
        return this.habilidade;
    }
    fichaHabilidade() {
        (0, Cores_1.red)(`
O inimigo que voce ira combater tem o seguinte especial:
Com uma chance de 10%, esse inimigo pode roubar parte do seu ouro
em vez de atacar normalmente.        
        `);
    }
    tomarDano(dano) {
        const defesaAleatoria = Math.floor(Math.random() * (this.defesa + 1));
        const danoFinal = Math.max(0, dano - defesaAleatoria);
        this.vida -= danoFinal;
        (0, Cores_1.blue)(`
-- ----------------------------------------- --        
    ${this.nome.toUpperCase()} TOMOU DANO!
    Dano recebido: ${dano}
    Defesa: ${defesaAleatoria}
    Dano efetivo recebido: ${danoFinal}
-- ----------------------------------------- --    
        `);
        if (this.vida < 0) {
            this.vida = 0;
            return dano;
        }
        return dano;
    }
    //Método de ataque.
    atacar(personagem) {
        const chance = Math.random();
        if (chance < 0.10) { // 10% de chance de roubar ouro em vez de atacar
            this.usarHabilidade(personagem);
            (0, Auxiliares_1.stop)();
            return;
        }
        const danoFinal = Math.floor(Math.random() * this.ataque) + 1;
        (0, Cores_1.red)(`
    ATAQUE DO INIMIGO:
    ╔═════════════════════════════════════════════╗
    ║                    ATAQUE                   ║
    ╠═════════════════════════════════════════════╣
    ║                                             ║
    ║ ${this.nome} atacou ${personagem.getNome()}!
    ║                                             ║
    ║ DANO CAUSADO  : ${danoFinal}                
    ║                                             ║
    ╚═════════════════════════════════════════════╝`);
        personagem.tomarDano(danoFinal);
        (0, Auxiliares_1.stop)();
    }
    //Método de habilidade do inimigo
    usarHabilidade(personagem) {
        const ouroRoubado = Math.floor(Math.random() * 8) + 3; // rouba entre 3 e 10 de ouro
        const ouroDisponivel = personagem.getOuro();
        const valorRealRoubado = Math.min(ouroDisponivel, ouroRoubado);
        personagem.setOuro(-valorRealRoubado);
        (0, Cores_1.red)(`
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
    fichaInimigo() {
        (0, Cores_1.yellow)(`
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
exports.Saqueador = Saqueador;
