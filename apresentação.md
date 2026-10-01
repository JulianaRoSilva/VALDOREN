## 🎮 VALDOREN — Pontos para Apresentação

### 🧬 Programação Orientada a Objetos (POO) 
### Foco em fazer um sistema Modular e sem repetição de Código
---

### Personagem
* **Polimorfismo:** Método de ataque especial que deve ser implementado em cada personagem de uma forma diferente
```ts
abstract usarAtaqueEspecial(inimigo: Inimigo): number;
```
* **Herança:** As oito classes de personagens herdam de `Personagem`.
```ts
export class Bardo extends Personagem;
```
* **Encapsulamento:** Atributos são `protected` e acessados através de métodos.
```ts
protected nome: string;
```
* **Abstração:** A classe `Personagem` define uma estrutura comum para os personagens mas não pode ser instanciada.
```ts
export abstract class Personagem {}
```
- A classe personagem é uma das mais completas e importantes do código porque, é através dela que temos os principais métodos de controle de inventário, tomar dano, atacar, defender, setar atributos novos conforme o andamento do jogo, receber ouro, perder ouro, controle de reputação e utilização de itens


### 🛡️ Interfaces

* **Interface `Inimigo`:** Define um contrato comum para todos os inimigos.
* **Interface `Item`:** Permite trabalhar com diferentes tipos de itens através de uma estrutura comum.

### ⚔️ Inimigos
### Cada inimigo tem uma habilidade especial
* **Dragão da Montanha** — Conversão de Vida em Ataque: Possui 40% de chance de sacrificar 5 pontos de vida para aumentar seu ataque em 8 pontos.
* **Esqueleto das Trevas** — Roubo de Vida: Rouba vida do personagem e recupera a mesma quantidade para si, aumentando sua própria sobrevivência.
* **Fada Corrompida** — Dano Duplo: Possui 60% de chance de causar o dobro do dano em seu ataque.
* **Fantasma** — Esquiva: Possui 40% de chance de esquivar completamente de um ataque recebido, não sofrendo dano (O mais perigoso, porque pode moggar totalmente o ataque especial do personagem).
* **Saqueador do Cemitério** — Roubo Rápido: Possui 10% de chance de roubar entre 3 e 10 moedas de ouro do personagem em vez de realizar um ataque.
* **Rei dos Ossos** — Ressurgimento: Ao ser derrotado pela primeira vez, recupera 100 pontos de vida e inicia uma segunda etapa do combate.
```ts
// Exemplo de especial de defesa do Fantasma:
    public tomarDano(dano: number): number { 

        const chance: number = Math.random(); 
        const defesaAleatoria = Math.floor(Math.random() * (this.defesa + 1)); 

        // o max me retorna o maior valor entre os dois, se o dano por acaso ficar negativo, o dano será zerado
        const danoFinal = Math.max(0, dano - defesaAleatoria);


        if (chance < 0.40) {
            red(`    
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
```

### ⚔️ Sistema de combate

* **Combate:** `Confronto.ts` controla o fluxo das batalhas e as ações do jogador contra um inimigo. É possível **ATACAR**, **USAR POÇÃO** ou **UTILIZAR ATAQUE ESPECIAL** 
- Sistema de combate é um dos exemplos que comprova que o código é modular e evita repetição de código porque, podemos chamar o confronto no andamento da main, dessa forma:
```ts
iniciarConfronto(personagem, inimigo);
```
Além disso, todo o controle de ataque, defesa e tomarDano, estão nas classes de inimigos e personagens.

### 🎒 Inventário e equipamentos

* **Inventário:** Armazena armas, armaduras, poções e outros recursos.
* **Poções:** Podem aumentar a vida ou dano dependendo de qual poção usar. Controle de tipo de poção CURA ou FORÇA, foram realizados através de um ENUM
* **Armaduras:** Podem aumentar a defesa do personagem.
* **Loja:** Permite gastar ouro para comprar recursos e melhorar equipamentos.
* **Ouro:** É obtido e utilizado durante diferentes momentos da aventura.
- Todo o controle de inventário acontece em métodos dentro da classe abstrata Personagem

### 📖 História e consequências

* **Sistema de escolhas:** As decisões do jogador direcionam diferentes caminhos da história.
* **Reputação:** É alterada pelas escolhas e pode influenciar acontecimentos posteriores. (De acordo com a reputaçao, pode aparecer um BOss diferente, por exemplo)
* **Moeda:** É um elemento da história que pode alterar determinados acontecimentos.
* **Consequências:** As escolhas podem alterar ouro, reputação e outros estados do personagem.
* **Finais:** As condições acumuladas durante a aventura podem levar a diferentes finais.

---

### ⭐ Requisitos minimos
* **Iniciar uma nova aventura**: Na main, OK
* **Criar ou escolher um personagem**: OK, 8 opções de personagens com diferentes valores de atributos
* **Visualizar seus atributos**: Inventário, OK
* **Explorar diferentes locais**: Caminhos, OK
* **Fazer escolhas**: Caminhos, OK
* **Encontrar itens**: Encontra Ouro, OK
* **Utilizar itens**: Poções e Ouro são os itens utilizaveis, OK
* **Equipar armas e armaduras**: Possível comprar e equipar armaduras OK
* **Enfrentar inimigos**: Método iniciarConfronto, com 5 inimigos possiveis.
* **Vencer ou perder combates**: Fazemos esse controle no iniciarConfronto()
* **Ganhar ou perder ouro**: Ganho de ouro ao derrotar o personagem e encontrar ele pelo caminho. Perda de ouro colocamos em um combate como habilidade especial
* **Avançar na história**: Nos caminhos, OK
* **Chegar a pelo menos três finais diferentes**: OK
* **Encerrar o jogo adequadamente**: Encerramos o jogo com uma breve explicação do final, OK