"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FadaCorrompida = void 0;
//Causa dano em dobro dependendo de uma chance variável 
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
class FadaCorrompida {
    nome = 'Fada Corrompida';
    vida = 60;
    ataque = 12;
    defesa = 3;
    habilidade = 'Dano em dobro';
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
Com uma chance de 60%, esse inimigo podera dar dano duplo.        
        `);
    }
    tomarDano(dano) {
        const defesaAleatoria = Math.floor(Math.random() * (this.defesa + 1)); // defesa aleatória
        // o max me retorna o maior valor entre os dois, se o dano por acaso ficar negativo, o dano será zerado
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
        const danoAleatorio = Math.floor(Math.random() * this.ataque) + 1;
        let danoFinal;
        if (chance < 0.60) { // 60% de chance de ter ataque duplo
            danoFinal = danoAleatorio * 2;
            (0, Cores_1.red)(`
    ATAQUE DO INIMIGO:
    ╔════════════════════════════════════════╗
    ║          HABILIDADE ESPECIAL           ║
    ╠════════════════════════════════════════╣
    ║                                        ║
    ║ ${this.nome} ativou ATAQUE DUPLO!      
    ║                                        ║
    ║ DANO CAUSADO  : ${danoFinal}           
    ║                                        ║
    ║                                        ║
    ╚════════════════════════════════════════╝
    `);
            personagem.tomarDano(danoFinal);
            (0, Auxiliares_1.stop)();
        }
        else {
            danoFinal = danoAleatorio;
            (0, Cores_1.red)(`
    ATAQUE DO INIMIGO:
    ╔════════════════════════════════════════╗
    ║                 ATAQUE                 ║
    ╠════════════════════════════════════════╣
    ║                                        ║
    ║ ${this.nome} atacou ${personagem.getNome()}!
    ║                                        ║
    ║ DANO CAUSADO  : ${danoFinal}           ║
    ║                                        ║
    ╚════════════════════════════════════════╝
        `);
            (0, Auxiliares_1.stop)();
        }
    }
    //Método de habilidade do inimigo
    usarHabilidade(personagem) {
        const dano = personagem.tomarDano(this.ataque * 2);
        (0, Cores_1.red)(`
    ╔════════════════════════════════════════╗
    ║          HABILIDADE ESPECIAL           ║
    ╠════════════════════════════════════════╣
    ║                                        ║
    ║ ${this.nome} ativou ATAQUE DUPLO!      
    ║                                        ║
    ║ DANO CAUSADO  : ${dano}                
    ║ VIDA RESTANTE : ${personagem.getVida()}
    ║                                        ║
    ╚════════════════════════════════════════╝
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
exports.FadaCorrompida = FadaCorrompida;
