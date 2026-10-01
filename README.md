# Nome do jogo
- Mistério de Valdoren

## Integrantes
* Juliana
* Erick


## Como executar o projeto
- Executar o arquivo main.js no terminal através do comando `node main.js`

---

# 🏰 Arquitetura do Projeto

O **VALDOREN** foi desenvolvido utilizando conceitos de **Programação Orientada a Objetos (POO)**.

O projeto está organizado em diferentes pastas, separando as responsabilidades de **personagens, inimigos, inventário, interfaces, combate, história e funções auxiliares**.

---

## 📂 Auxiliares

A pasta `Auxiliares` reúne funções e recursos utilizados em diferentes partes do jogo.

### `Auxiliares.ts`

Contém funções auxiliares utilizadas para:

* Limpeza do terminal;
* Pausas durante a execução;
* Menus;
* Mensagens;
* Fluxos de interação com o jogador.

### `Cores.ts`

Contém funções responsáveis pela aplicação de cores nas mensagens exibidas no terminal.

---

## 📂 Interfaces

A pasta `Interfaces` contém os contratos utilizados por diferentes classes do projeto.

### `Inimigo.ts`

Define os métodos que os inimigos devem possuir.

Dessa forma, diferentes tipos de inimigos podem ser utilizados pelo sistema de combate seguindo uma mesma estrutura.

### `Item.ts`

Define os comportamentos básicos que os itens do inventário devem possuir.

Isso permite que diferentes tipos de itens sejam armazenados e manipulados através de uma estrutura comum.

---

## 📂 Personagens

A pasta `Personagens` contém as classes relacionadas aos personagens jogáveis.

### `Personagem.ts`

É a classe abstrata que serve como base para os personagens.

Ela concentra características comuns, como:

* Nome;
* Classe;
* Vida;
* Ataque;
* Defesa;
* Ouro;
* Reputação;
* Inventário;
* Moeda;
* Ataque especial.

Também contém comportamentos comuns, como:

* Atacar;
* Receber dano;
* Controlar vida;
* Controlar ouro;
* Controlar inventário;
* Utilizar itens;
* Controlar reputação.

### Classes de personagens

As classes específicas herdam de `Personagem`:

```text
Personagem
│
├── Bardo
├── Berserker
├── Cacador
├── Cavaleiro
├── Clerigo
├── Mago
├── Necromante
└── Paladino
```

Cada classe possui características próprias e implementa seu próprio **ataque especial**.

---

## 📂 Inimigos

A pasta `Inimigos` contém os adversários encontrados durante a aventura.

Os inimigos são:

* `Dragao.ts`
* `Esqueleto.ts`
* `FadaCorrompida.ts`
* `Fantasma.ts`
* `Saqueador.ts`
* `ReiOssos.ts`

Cada inimigo possui características e comportamentos próprios, como:

* Vida;
* Ataque;
* Defesa;
* Habilidades;
* Comportamentos específicos durante o combate.

Todos seguem o contrato definido pela interface `Inimigo`.
Cada inimigo possui um especial, seja no dano ou defesa

---

## ⚔️ Confronto.ts

O arquivo `Confronto.ts` é responsável pelo fluxo dos combates.

Ele controla as ações realizadas durante uma batalha.

### Fluxo do combate

```text
Início do confronto
        │
        ▼
   Escolha da ação
        │
        ├── Ataque
        │
        ├── Poção
        │
        └── Ataque especial
        │
        ▼
Verificação da vida do inimigo
        │
        ▼
 Ataque do inimigo
        │
        ▼
Verificação da vida do personagem
        │
        ▼
Continuação do combate
```

A responsabilidade do `Confronto.ts` é controlar o **fluxo da batalha**, enquanto personagens e inimigos possuem seus próprios comportamentos.

---

## 📂 Inventário

A pasta `Inventario` concentra os recursos que podem ser utilizados pelo personagem.

### `Arma.ts`

Representa as armas utilizadas pelos personagens.

As armas possuem características próprias e podem influenciar o ataque do personagem.

### `Armadura.ts`

Representa as armaduras disponíveis no jogo.

Elas estão relacionadas à defesa do personagem.

### `Pocao.ts`

Representa as poções utilizadas durante a aventura.

As poções possuem efeitos que podem modificar atributos do personagem.

### `Moeda.ts`

Representa a moeda encontrada durante a aventura.

A posse da moeda também pode influenciar acontecimentos da história.

### `Ouro.ts`

Está relacionado ao sistema de ouro utilizado pelo personagem.

O ouro pode ser obtido e gasto durante a aventura.

### `TiposENUMs.ts`

Centraliza os tipos enumerados utilizados pelo sistema de inventário.

### `Loja.ts`

É responsável pelas compras realizadas pelo personagem.

O jogador pode utilizar seu ouro para adquirir recursos como:

* Poções;
* Armaduras;
* Melhorias de armas.

---

# 📖 Sistema de História

A história do **VALDOREN** é baseada em escolhas do jogador.

Durante a aventura, o jogador pode seguir diferentes caminhos.

As escolhas podem modificar informações do personagem, principalmente:

* Ouro;
* Reputação;
* Moeda.

Essas informações são utilizadas posteriormente pela história para alterar determinados acontecimentos.

## Fluxo da história

```text
       Início
          │
          ▼
       Escolha
          │
     ┌────┴────┐
     │         │
     ▼         ▼
 Caminho 1   Caminho 2
     │         │
     ▼         ▼
 Novas       Novas
 escolhas    escolhas
     │         │
     └────┬────┘
          ▼
       Batalhas
          │
          ▼
       História
          │
          ▼
         Final
```

---

# ⭐ Sistema de Reputação

A reputação representa uma característica do personagem que pode ser alterada pelas escolhas realizadas durante a aventura.

```text
        Escolha
           │
      ┌────┴────┐
      │         │
      ▼         ▼
 Consequência  Consequência
   positiva      negativa
      │             │
      ▼             ▼
 Aumento de      Redução de
 reputação       reputação
```

A reputação é consultada em determinados momentos da história e pode influenciar acontecimentos posteriores.

---

# 💰 Sistema de Ouro

O ouro é um recurso utilizado pelo personagem durante a aventura.

Ele pode ser:

* Obtido através da história;
* Utilizado para realizar pagamentos;
* Utilizado na loja;
* Utilizado para comprar equipamentos;
* Utilizado para adquirir poções;
* Utilizado para melhorar armas.

---

# 🎮 Main.ts

O `Main.ts` é o ponto de entrada da aplicação.

Ele inicia o jogo e conecta as principais partes do sistema.

## Fluxo geral

```text
              Main
                │
                ▼
      Criação do personagem
                │
                ▼
         Escolha da classe
                │
                ▼
         Definição do nome
                │
                ▼
        Personagem criado
                │
                ▼
        Início da aventura
                │
          ┌─────┴─────┐
          ▼           ▼
      Escolhas      Batalhas
          │           │
          └─────┬─────┘
                ▼
              Loja
                │
                ▼
         Novas escolhas
                │
                ▼
              Final
```

---

# 🔗 Relação entre os Componentes

A comunicação entre as principais partes do projeto pode ser representada da seguinte maneira:

```text
                         MAIN
                           │
                           ▼
                      PERSONAGEM
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
     INVENTÁRIO           OURO          REPUTAÇÃO
          │
     ┌────┼────┐
     ▼    ▼    ▼
   ARMA ARMADURA POÇÃO
          │
          ▼
        LOJA
```

O personagem também participa dos confrontos:

```text
PERSONAGEM
     │
     │ enfrenta
     ▼
  INIMIGO
     │
     ├── Dragão
     ├── Esqueleto
     ├── Fada Corrompida
     ├── Fantasma
     └── Saqueador
     │
     ▼
 CONFRONTO
     │
     ▼
Ações do jogador
     │
     ▼
  História
     │
     ├── Ouro
     ├── Reputação
     └── Moeda
     │
     ▼
Diferentes acontecimentos
     │
     ▼
   Finais
```

---

# 🧩 Conceitos de POO Utilizados

O projeto utiliza diferentes conceitos de **Programação Orientada a Objetos**.

## Encapsulamento

Os atributos das classes são protegidos ou privados, e o acesso a eles é realizado através de métodos.

Isso permite controlar como os dados dos objetos são consultados e modificados.

## Herança

As classes dos personagens herdam características e comportamentos da classe abstrata `Personagem`.

```text
              Personagem
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
      Bardo     Mago    Cavaleiro
```

Isso permite reutilizar comportamentos e atributos comuns entre diferentes classes.

## Abstração

A classe `Personagem` define uma estrutura comum para os diferentes personagens do jogo.

Ela concentra comportamentos e características que são compartilhados pelas classes derivadas.

## Interfaces

As interfaces `Inimigo` e `Item` estabelecem contratos que podem ser implementados por diferentes classes.

Isso garante que diferentes objetos sigam uma estrutura comum, mesmo possuindo comportamentos específicos.

## Polimorfismo

Diferentes personagens e inimigos podem possuir comportamentos específicos, mas ainda podem ser tratados através de uma estrutura comum.

Por exemplo, cada personagem possui seu próprio **ataque especial**, mesmo todos sendo derivados da classe `Personagem`.

---

# 📌 Resumo da Arquitetura

| Pasta / Arquivo | Responsabilidade                              |
| --------------- | --------------------------------------------- |
| `Auxiliares/`   | Funções reutilizáveis e recursos da interface |
| `Interfaces/`   | Contratos utilizados pelas classes            |
| `Personagens/`  | Classes e comportamentos dos personagens      |
| `Inimigos/`     | Classes e comportamentos dos inimigos         |
| `Inventario/`   | Armas, armaduras, poções e outros recursos    |
| `Loja.ts`       | Sistema de compras                            |
| `Confronto.ts`  | Fluxo dos combates                            |
| `Main.ts`       | Entrada e execução principal do jogo          |
| `História`      | Escolhas, consequências e finais              |

---

# 🏰 Considerações sobre a Arquitetura e divisão de tarefas

A arquitetura do **VALDOREN** foi organizada buscando separar as responsabilidades do sistema.

Cada parte do projeto possui uma função específica, permitindo que **personagens, inimigos, inventário, combate, loja e história** possuam suas próprias estruturas e responsabilidades.

O desenvolvimento foi bem duvidido entre Juliana e Erick, compartilhando ideias de código, lógica e testes compatilhados. 
Erick ficou mais responsável por desenvolver a main, e Juliana ficou responsável por desenvolver lógicas de controle de personagens, inventário, loja, inimigos e confronto. Porém, ambos mexeram em códigos desenvolvidos pelos dois, fazendo ajustes, incluindo novas ideias e adaptando certas classes para conseguirmos incluir a ideia um do outro 


