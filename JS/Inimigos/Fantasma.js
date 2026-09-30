"use strict";
//Chance de ignorar completamente um ataque
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fantasma = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
class Fantasma {
    nome = 'Fantasma do Clerigo';
    vida = 50;
    ataque = 15;
    defesa = 3;
    habilidade = 'Esquiva';
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
O inimigo que voce irá combater tem o seguinte especial:
Com uma chance de 40%, esse inimigo poderá se esquivar totalmente do dano do seu ataque.        
        `);
    }
    //Método de ataque.
    atacar(personagem) {
        const danoFinal = Math.floor(Math.random() * this.ataque) + 1; // calculo o dano aleatorio 
        (0, Cores_1.red)(`
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
            `);
        personagem.tomarDano(danoFinal); // executo o dano no inimigo
        (0, Auxiliares_1.stop)();
    }
    tomarDano(dano) {
        const chance = Math.random(); // controlar a chance do personagem se esquivar do dano!
        const defesaAleatoria = Math.floor(Math.random() * (this.defesa + 1)); // defesa aleatória
        // o max me retorna o maior valor entre os dois, se o dano por acaso ficar negativo, o dano será zerado
        const danoFinal = Math.max(0, dano - defesaAleatoria);
        if (chance < 0.40) {
            (0, Cores_1.red)(`    
    ESPECIAL INIMIGO
    ╔═══════════════════════════════════════════════╗
    ║               DEFESA ESPECIAL                 ║
    ╠═══════════════════════════════════════════════╣
    ║ ${String(this.nome).padEnd(45)} 
    ║                                               ║
    ║ ignorou completamente o ataque e se           ║
    ║ esquivou do dano recebido!                    ║
    ║                                               ║
    ║ CHANCE DE ESQUIVA : 30%                       ║
    ║                                               ║
    ╚═══════════════════════════════════════════════╝
        `);
        }
        else {
            this.vida -= danoFinal;
            (0, Cores_1.blue)(`
-- ----------------------------------------- --            
    ${this.nome.toUpperCase()} TOMOU DANO!
    Dano recebido: ${dano}
    Defesa: ${defesaAleatoria}
    Dano efetivo recebido: ${danoFinal}
-- ----------------------------------------- -- 
        `);
        }
        if (this.vida < 0) {
            this.vida = 0;
            return dano;
        }
        return dano;
    }
    //Mostrar dados do inimigo
    fichaInimigo() {
        (0, Cores_1.red)(`
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
exports.Fantasma = Fantasma;
