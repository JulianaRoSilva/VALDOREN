import { clear, stop } from "../Auxiliares/Auxiliares";
import { blue, green, red, yellow } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Item } from "../Interfaces/Item";
import { Arma } from "../Inventario/Arma";
import { Pocao } from "../Inventario/Pocao";
import { EfeitoPocao } from "../Inventario/TiposENUMs";

const ask = require('readline-sync');

export abstract class Personagem {

    protected nome: string;
    protected classe: string;
    protected vida: number;
    protected ataque: number;
    protected defesa: number;
    protected ouro: number;
    protected reputacao: number;
    protected usouAtaqueEspecial: boolean = false;

    protected inventario: Item[] = [];
    protected moeda: boolean = false;


    constructor(nome: string, classe: string, vida: number, ataque: number, defesa: number, ouro: number, reputacao: number) {
        this.nome = nome;
        this.classe = classe;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.ouro = ouro;
        this.reputacao = reputacao;
    }

    public getNome(): string {
        return this.nome;
    }

    public getClasse(): string {
        return this.classe;
    }

    public getVida(): number {
        return this.vida;
    }

    public getAtaque(): number {
        return this.ataque
    }

    public getDefesa(): number {
        return this.defesa;
    }

    public getOuro(): number {
        return this.ouro
    }

    public getTemMoeda(): boolean {
        return this.moeda;
    }

    public getInventario(): Item[] {
        return this.inventario;
    }

    public getReputacao(): number {
        return this.reputacao
    }

    public getUsouAtaqueEspecial(): boolean {
        return this.usouAtaqueEspecial;
    }

    public setDefesa(val: number): void {
        this.defesa += val;
    }

    public setVida(val: number): void {
        this.vida += val;
    }

    public setAtaque(val: number): void {
        this.ataque += val;
    }

    // método para ganhar adicionar ouro
    public setOuro(val: number): void {
        this.ouro += val;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public getItens(): Item[] {
        return this.inventario
    }

    public pagarOuro(val: number): boolean {
        if (val > this.ouro) {
            return false
        }
        this.ouro -= val
        return true;
    }

    // Método possui uma validação para que, se o valor for neg\pos, vai mostrar mensagens diferentes no terminal para o jogador.
    public setReputacao(val: number): void {

        this.reputacao += val;

        if (val > 0) {
            green(`Seu personagem ganhou ${val} de reputacao! Isso ira te trazer consequencias no futuro da sua jornada\n`);
        } else {
            red(`Seu personagem perdeu ${val} de reputacao! Isso ira te trazer consequencias no futuro da sua jornada\n`);
        }
    }

    // método para setar que o jogador já usou o ataque especial
    public setEspecial(): void {
        this.usouAtaqueEspecial = true;
    }

    // utilizado pra fazer o personagem pegar a moeda para entrar na caverna posteriormente na história
    public pegarMoeda(): void {
        this.moeda = true;
    }

    // método que será implementado em cada classe de uma maneira
    abstract usarAtaqueEspecial(inimigo: Inimigo): number;


    // Métodos de combate
    public tomarDano(dano: number): number {

        const defesaAleatoria = Math.floor(Math.random() * (this.defesa + 1));

        // o max me retorna o maior valor entre os dois, se o dano por acaso ficar negativo, o dano será zerado
        const danoFinal = Math.max(0, dano - defesaAleatoria);
        this.vida -= danoFinal;

        red(`
-- ----------------------------------------- --
    ${this.nome.toUpperCase()} TOMOU DANO!
    Dano recebido: ${dano}
    Defesa: ${defesaAleatoria}
    Dano efetivo recebido: ${danoFinal}
-- ----------------------------------------- --        
            `)

        if (this.vida < 0) {
            this.vida = 0;
        }
        return danoFinal;
    }


    public atacar(inimigo: Inimigo): void {
        blue(`
    ╔═══════════════════════════════════╗
    ║              ATAQUE               ║
    ╠═══════════════════════════════════╣
    ║                                   ║
    ║  ATAQUE DE ${this.nome.toUpperCase()}
    ║  VALOR DO ATAQUE: ${this.ataque}
    ║                                   ║
    ╚═══════════════════════════════════╝`)
        inimigo.tomarDano(this.ataque)
    }

    // -- -------------------------------------- --
    // -- controle de inventário dos personagens --

    // método para fazer uma verificação para não comprar mais de uma vez a mesma armadura na loja
    public possuiItem(nome: string): boolean {
        return this.inventario.some(item => item.getNome() === nome);
    }

    public adicionaInventario(item: Item): void {
        this.inventario.push(item)
    }

    public tomarPocao(pocao: Pocao): void {
        if (pocao.getEfeito() === EfeitoPocao.CURA) { // CURA = 0
            this.setVida(pocao.getValorEfeito());
            blue(`Vida recuperada em ${pocao.getValorEfeito()} do seu personagem!`);
            stop()

        } else if (pocao.getEfeito() === EfeitoPocao.FORCA) { // FORÇA = 1
            this.setAtaque(pocao.getValorEfeito());
            blue(`Ataque aumentado em ${pocao.getValorEfeito()} do seu personagem!`);
            stop();

        }

        const indice = this.inventario.indexOf(pocao);

        if (indice !== -1) {
            this.inventario.splice(indice, 1);
        }
    }

    // Feito por IA
    public escolherPocao(): Pocao | null {

        // faz um array de poções percorrendo item a item do meu array de itens
        const pocoes = this.inventario.filter((item) => item.getTipo() === 'POCAO') as Pocao[];

        if (pocoes.length === 0) {
            return null;
        }

        green(`\nEscolha uma poção: `);

        pocoes.forEach((pocao, posicao) => {
            green(`${posicao + 1} - ${pocao.getNome()}`);
        });

        const escolha = ask.questionInt();

        if (escolha < 1 || escolha > pocoes.length) {
            red("Pocao invalida!");
            return null;
        }

        return pocoes[escolha - 1];
    }

    public mostrarInventario(): void {

        clear();
        let temPocao: boolean = this.inventario.some((item) => item.getTipo() === 'POCAO');

        green(`
███ █   █ █   █ █████ █   █ █████  ███  ████  ███  ███    
 █░░██  █░█░  █░█░░░░░██  █░ ░█░░░█ ░░█ █░░░█  █░░█ ░░█   
 █░░█░█ █░█░░ █░████░░█░█ █░░ █░░░█████░████░░ █░░█░ ░█░  
 █░░█░░██░░█░█ ░█░░░░ █░░██░░ █░░ █░░░█░█░░█░ ░█░░█░░ █░░ 
███░█░░ █░░ █ ░ █████░█░░ █░░ █░░ █░░░█░█░░░█░███░ ███ ░░ 
░░░ ░░  ░░  ░ ░ ░░░░░ ░░  ░░  ░░  ░░  ░░░░  ░ ░░░  ░░░ ░ 
 `)

        green(`POÇOES:`)
        for (let item of this.inventario) {
            if (item.getTipo() === 'POCAO' && item instanceof Pocao) {
                green(`- ${item.getNome()} | Efeito: +${item.getValorEfeito()}`);
            }
        }

        green(`\nARMADURAS:`)
        for (let item of this.inventario) {
            if (item.getTipo() === 'ARMADURA') {
                green(`- ${item.getNome()}`)

            }
        }

        green(`\nARMAS:`)
        for (let item of this.inventario) {
            if (item.getTipo() === 'ARMA' && item instanceof Arma) {
                green(`- ${item.getNome()} | Nível ${item.getNivel()}`);
            }
        }

        green(`\nOUTROS:`)
        for (let item of this.inventario) {
            if (item.getTipo() === 'MOEDA') {
                green(`- ${item.getNome()}`)

            }
        }

        green(`
-----------------------------------------------`)

        // verifica se tem 
        if (temPocao) {
            green(`
Opcoes:                
1 - Usar pocao
2 - Fechar inventário`)
        } else {
            green(`
1̶ ̶-̶ ̶U̶s̶a̶r̶ ̶p̶o̶c̶a̶o̶ (Voce não possuí poções a serem utilizadas)
2 - Fechar inventário`)
        }
    }

    public fichaPersonagem(): void {
        if (this.usouAtaqueEspecial) {
            yellow(`
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
                `)
        } else {
            yellow(`
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
/** COMENTARIOS
 * Podemos adicionar um método "Usar Habilidade" aqui. E
 * Definir com Erick sobre moeda J
 * 
 * 
 */

