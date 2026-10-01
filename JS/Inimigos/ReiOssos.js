"use strict";
//Boss para o game
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReiOssos = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
/*COMENTÁRIOS
Fiz um atributo especial para esse inimigo
*/
class ReiOssos {
    nome = 'Rei dos Ossos';
    vida = 80;
    ataque = 25;
    defesa = 10;
    habilidade = 'Conversão vida em Ataque';
    ressurgir = false;
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
    getRessurgir() {
        return this.ressurgir;
    }
    // Método utilizado no inicio do combate em cada confronto
    fichaHabilidade() {
        (0, Cores_1.red)(`
O inimigo que voce ira combater tem o seguinte especial:
Após ele ser derrotado, irá ressurgir novamente para um novo combate.       
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
        let danoFinal;
        //Condição de ressurgir novamente
        if (this.vida <= 0 && !this.ressurgir) {
            this.vida = 100;
            this.ressurgir = true;
            danoFinal = Math.floor(Math.random() * this.ataque) + 1; // cálculo aleatório do dado do inimigo
            (0, Cores_1.red)(`
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
            (0, Auxiliares_1.stop)();
        }
        else {
            danoFinal = Math.floor(Math.random() * this.ataque) + 1; // Calculo o dano final de acordo com a variante da minha chance de especial
            (0, Cores_1.red)(`
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
            `);
            personagem.tomarDano(danoFinal); // personagem tomando dano 
            (0, Auxiliares_1.stop)();
        }
    }
    ;
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
exports.ReiOssos = ReiOssos;
