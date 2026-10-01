"use strict";
// esse personagem não da dano, apenas rouba a sua vida, como se fosse um dementador
// Esse oponente em questão não terá defesa.. porque ele ja vai roubar vida do oponente e pegar para Si
Object.defineProperty(exports, "__esModule", { value: true });
exports.Esqueleto = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
class Esqueleto {
    nome = 'Esqueleto das Trevas';
    vida = 40;
    ataque = 15;
    defesa = 0;
    habilidade = 'Roubo de vida do oponente';
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
Seu método de ataque é roubo de vida. A cada dano causado, sua vida aumenta no mesmo valor do dano.        
        `);
    }
    tomarDano(dano) {
        this.vida -= dano;
        (0, Cores_1.blue)(`        
-- ----------------------------------------- --
    ${this.nome.toUpperCase()} TOMOU DANO! 
    Dano recebido: ${dano}
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
        (0, Auxiliares_1.clear)();
        const rouboAleatorio = Math.floor(Math.random() * this.ataque) + 1;
        this.vida += rouboAleatorio; // O roubo de vida é direto, não depende do ataque do personagem pro roubo
        (0, Cores_1.red)(`
    ATAQUE DO INIMIGO:        
    ╔════════════════════════════════════════╗
    ║             ROUBO DE VIDA              ║
    ╠════════════════════════════════════════╣
    ║                                        ║
    ║ ${this.nome}                   
    ║ atacou ${personagem.getNome()}            
    ║                                        ║
    ║ VIDA ROUBADA : ${String(rouboAleatorio).padEnd(23)} 
    ║ +${rouboAleatorio} DE HP                                      
    ║                                        ║
    ║                                        ║
    ╚════════════════════════════════════════╝
    `);
        personagem.tomarDano(rouboAleatorio); // método de tomar dano retorna o dano efetivo
        (0, Auxiliares_1.stop)();
    }
    //Mostrar dados do inimigo
    fichaInimigo() {
        (0, Cores_1.red)(`      
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
exports.Esqueleto = Esqueleto;
