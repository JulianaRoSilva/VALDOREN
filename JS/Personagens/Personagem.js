"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
const Arma_1 = require("../Inventario/Arma");
const Pocao_1 = require("../Inventario/Pocao");
const TiposENUMs_1 = require("../Inventario/TiposENUMs");
const ask = require('readline-sync');
class Personagem {
    nome;
    classe;
    vida;
    ataque;
    defesa;
    ouro;
    reputacao;
    usouAtaqueEspecial = false;
    inventario = [];
    moeda = false;
    constructor(nome, classe, vida, ataque, defesa, ouro, reputacao) {
        this.nome = nome;
        this.classe = classe;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.ouro = ouro;
        this.reputacao = reputacao;
    }
    getNome() {
        return this.nome;
    }
    getClasse() {
        return this.classe;
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
    getOuro() {
        return this.ouro;
    }
    getTemMoeda() {
        return this.moeda;
    }
    getInventario() {
        return this.inventario;
    }
    getReputacao() {
        return this.reputacao;
    }
    getUsouAtaqueEspecial() {
        return this.usouAtaqueEspecial;
    }
    setDefesa(val) {
        this.defesa += val;
    }
    setVida(val) {
        this.vida += val;
    }
    setAtaque(val) {
        this.ataque += val;
    }
    // método para ganhar adicionar ouro
    setOuro(val) {
        this.ouro += val;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getItens() {
        return this.inventario;
    }
    pagarOuro(val) {
        if (val > this.ouro) {
            return false;
        }
        this.ouro -= val;
        return true;
    }
    // Método possui uma validação para que, se o valor for neg\pos, vai mostrar mensagens diferentes no terminal para o jogador.
    setReputacao(val) {
        this.reputacao += val;
        if (val > 0) {
            (0, Cores_1.green)(`Seu personagem ganhou ${val} de reputacao! Isso ira te trazer consequencias no futuro da sua jornada\n`);
        }
        else {
            (0, Cores_1.red)(`Seu personagem perdeu ${val} de reputacao! Isso ira te trazer consequencias no futuro da sua jornada\n`);
        }
    }
    // método para setar que o jogador já usou o ataque especial
    setEspecial() {
        this.usouAtaqueEspecial = true;
    }
    // utilizado pra fazer o personagem pegar a moeda para entrar na caverna posteriormente na história
    pegarMoeda() {
        this.moeda = true;
    }
    // Métodos de combate
    tomarDano(dano) {
        const defesaAleatoria = Math.floor(Math.random() * (this.defesa + 1));
        // o max me retorna o maior valor entre os dois, se o dano por acaso ficar negativo, o dano será zerado
        const danoFinal = Math.max(0, dano - defesaAleatoria);
        this.vida -= danoFinal;
        (0, Cores_1.red)(`
-- ----------------------------------------- --
    ${this.nome.toUpperCase()} TOMOU DANO!
    Dano recebido: ${dano}
    Defesa: ${defesaAleatoria}
    Dano efetivo recebido: ${danoFinal}
-- ----------------------------------------- --        
            `);
        if (this.vida < 0) {
            this.vida = 0;
        }
        return danoFinal;
    }
    atacar(inimigo) {
        (0, Cores_1.blue)(`
    ╔═══════════════════════════════════╗
    ║              ATAQUE               ║
    ╠═══════════════════════════════════╣
    ║                                   ║
    ║  ATAQUE DE ${this.nome.toUpperCase()}
    ║  VALOR DO ATAQUE: ${this.ataque}
    ║                                   ║
    ╚═══════════════════════════════════╝`);
        inimigo.tomarDano(this.ataque);
    }
    // -- -------------------------------------- --
    // -- controle de inventário dos personagens --
    // método para fazer uma verificação para não comprar mais de uma vez a mesma armadura na loja
    possuiItem(nome) {
        return this.inventario.some(item => item.getNome() === nome);
    }
    adicionaInventario(item) {
        this.inventario.push(item);
    }
    tomarPocao(pocao) {
        if (pocao.getEfeito() === TiposENUMs_1.EfeitoPocao.CURA) { // CURA = 0
            this.setVida(pocao.getValorEfeito());
            (0, Cores_1.blue)(`Vida recuperada em ${pocao.getValorEfeito()} do seu personagem!`);
            (0, Auxiliares_1.stop)();
        }
        else if (pocao.getEfeito() === TiposENUMs_1.EfeitoPocao.FORCA) { // FORÇA = 1
            this.setAtaque(pocao.getValorEfeito());
            (0, Cores_1.blue)(`Ataque aumentado em ${pocao.getValorEfeito()} do seu personagem!`);
            (0, Auxiliares_1.stop)();
        }
        const indice = this.inventario.indexOf(pocao);
        if (indice !== -1) {
            this.inventario.splice(indice, 1);
        }
    }
    // Feito por IA
    escolherPocao() {
        // faz um array de poções percorrendo item a item do meu array de itens
        const pocoes = this.inventario.filter((item) => item.getTipo() === 'POCAO');
        if (pocoes.length === 0) {
            return null;
        }
        (0, Cores_1.green)(`\nEscolha uma poção: `);
        pocoes.forEach((pocao, posicao) => {
            (0, Cores_1.green)(`${posicao + 1} - ${pocao.getNome()}`);
        });
        const escolha = ask.questionInt();
        if (escolha < 1 || escolha > pocoes.length) {
            (0, Cores_1.red)("Pocao invalida!");
            return null;
        }
        return pocoes[escolha - 1];
    }
    mostrarInventario() {
        (0, Auxiliares_1.clear)();
        let temPocao = this.inventario.some((item) => item.getTipo() === 'POCAO');
        (0, Cores_1.green)(`
███ █   █ █   █ █████ █   █ █████  ███  ████  ███  ███    
 █░░██  █░█░  █░█░░░░░██  █░ ░█░░░█ ░░█ █░░░█  █░░█ ░░█   
 █░░█░█ █░█░░ █░████░░█░█ █░░ █░░░█████░████░░ █░░█░ ░█░  
 █░░█░░██░░█░█ ░█░░░░ █░░██░░ █░░ █░░░█░█░░█░ ░█░░█░░ █░░ 
███░█░░ █░░ █ ░ █████░█░░ █░░ █░░ █░░░█░█░░░█░███░ ███ ░░ 
░░░ ░░  ░░  ░ ░ ░░░░░ ░░  ░░  ░░  ░░  ░░░░  ░ ░░░  ░░░ ░ 
 `);
        (0, Cores_1.green)(`POÇOES:`);
        for (let item of this.inventario) {
            if (item.getTipo() === 'POCAO' && item instanceof Pocao_1.Pocao) {
                (0, Cores_1.green)(`- ${item.getNome()} | Efeito: +${item.getValorEfeito()}`);
            }
        }
        (0, Cores_1.green)(`\nARMADURAS:`);
        for (let item of this.inventario) {
            if (item.getTipo() === 'ARMADURA') {
                (0, Cores_1.green)(`- ${item.getNome()}`);
            }
        }
        (0, Cores_1.green)(`\nARMAS:`);
        for (let item of this.inventario) {
            if (item.getTipo() === 'ARMA' && item instanceof Arma_1.Arma) {
                (0, Cores_1.green)(`- ${item.getNome()} | Nível ${item.getNivel()}`);
            }
        }
        (0, Cores_1.green)(`\nOUTROS:`);
        for (let item of this.inventario) {
            if (item.getTipo() === 'MOEDA') {
                (0, Cores_1.green)(`- ${item.getNome()}`);
            }
        }
        (0, Cores_1.green)(`
-----------------------------------------------`);
        // verifica se tem 
        if (temPocao) {
            (0, Cores_1.green)(`
Opcoes:                
1 - Usar pocao
2 - Fechar inventário`);
        }
        else {
            (0, Cores_1.green)(`
1̶ ̶-̶ ̶U̶s̶a̶r̶ ̶p̶o̶c̶a̶o̶ (Voce não possuí poções a serem utilizadas)
2 - Fechar inventário`);
        }
    }
    fichaPersonagem() {
        if (this.usouAtaqueEspecial) {
            (0, Cores_1.yellow)(`
    ╔═══════════════════════════════════╗
    ║          FICHA DO JOGADOR         ║
    ╠═══════════════════════════════════╣
    ║                                   ║
    ║  NOME   : ${this.nome} 
    ║  CLASSE : ${this.classe.padEnd(23)} 
    ║                                   ║
    ╠═══════════════════════════════════╣
    ║            ATRIBUTOS              ║
    ╠═══════════════════════════════════╣
    ║                                   ║
    ║  VIDA   : ${String(this.vida).padEnd(23)} 
    ║  ATAQUE : ${String(this.ataque).padEnd(23)} 
    ║  DEFESA : ${String(this.defesa).padEnd(23)} 
    ║                                   ║
    ╚═══════════════════════════════════╝
                `);
        }
        else {
            (0, Cores_1.yellow)(`
    ╔═══════════════════════════════════╗
    ║          FICHA DO JOGADOR         ║
    ╠═══════════════════════════════════╣
    ║                                   ║
    ║  NOME   : ${this.nome}
    ║  CLASSE : ${this.classe.padEnd(23)} 
    ║                                   ║
    ╠═══════════════════════════════════╣
    ║            ATRIBUTOS              ║
    ╠═══════════════════════════════════╣
    ║                                   ║
    ║  VIDA   : ${String(this.vida).padEnd(23)} 
    ║  ATAQUE : ${String(this.ataque).padEnd(23)} 
    ║  DEFESA : ${String(this.defesa).padEnd(23)} 
    ║                                   ║
    ║  ATAQUE ESPECIAL AINDA DISPONIVEL ║
    ║                                   ║
    ╚═══════════════════════════════════╝
    `);
        }
    }
}
exports.Personagem = Personagem;
/** COMENTARIOS
 * Podemos adicionar um método "Usar Habilidade" aqui. E
 * Definir com Erick sobre moeda J
 *
 *
 */
