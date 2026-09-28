# VALDOREN

### A definir:
- Arma do personagem: começa com uma arma fraca e da a possibilidade de upar ao decorrer de história (Acho MUITO legal a ideia de upar a arma utilizando ouro)
- Vamos colocar quantidades máxima de itens dentro do inventário (Variável dependendo do tipo de personagem ou padrão?);
- Comportamentos diferentes dependendo do modelo do jogador, vamos aplicar isso em quais e o que? (Erick criou os modelos de personagens com algumas ideias base de comportamentos, achei interessante J)


### Mudanças Ju
- Personagem: Troquei a forma como o inventário é composto dentro das classes de modelo (Interface base Item). Adicionei um array inventário de objetos do tipo Item que vai ter poções, armadura, arma, etc.
- Acho melhor trocar a interface personagem para uma classe que vai ser usada herança nos modelos pra poder mexer nos métodos em um lugar só em vez de ir modelo a modelo
- Falar sobre cores
- Falar sobre ENUM 


### Ideias Ju
- Controle de reputação do personagem para ditar os finais ou até contronfotos, aparições de itens, etc (Por exemplo, se ele derrota um monstro, ele vai ganhar 30 de reputação. Se ele roubar algum item a reputação dele diminui. A ideia é fazer com que o jogador consiga visualizar se ele está virando HEROI no jogo ou VILAO)
- Em algum momento do jogo, podemos fazer o personagem ir até o centro da cidade para gastar o ouro para Upar a arma dele em alguma, roubar algo (Isso vai diminuir a reputação dele) ou ajudar alguem (Aumentar reputação). 

### Ideias Erick
- Fazer comportamentos diferentes para cada modelo de personagem 


## Fazer
- Moeda no inicio do jogo para conseguir abrir uma daverna no meio do jogo J OK
- controle de reputação J           
- Armas é upável J              
- Transformar a interface personagem em classe para ter herança J OK
- Terminar o controle do inventário para usar poções, dropar itens J OK
- Fazer e organizar a função dos inimigos E OK
- Criar método no personagem para criar dano E 
- Controle de ataque e dano contra inimigo na classe Personagem E 
- 

## Confronto
- tomarDano e atacar são os métodos principais que todos os inimigos e os personagens tem. Dentro do método atacar de cada um vamos chamar o método tomar dano (Com as devidas validações especiais, como por exemplo, o fantasma tem a opção de se esquivar do dano, inclusive podendo moggar o usar especial do personagem);

## Ideias de mudança no caminho ou ajustes pra melhor adaptação do código na história
- Aumentar um pouco o valor da quantidade de reputação que tem que ter para abrir o caminho da negociação com os saqueadores
- Mostrar no final do jogo uma parcial se o jogador é HEROU ou VILAO da história, podemos criar uma variavel do tipo boolean e altera-la conforme cada final. Posso fazer essa ficha depois e adicionar as opções no personagem J
- Revisar no caminho o encontrarItens, acho que ela não esta adicionando itens no inventário 
- Na parte 6 do caminho, acho legal a gente colocar a parte de encontrar itens, em vez de abrir novamente a loja do Elfo. Acho legal deixamos apenas 1x a lojinha
- Revisar a reputação dos personagens, verificar se não estão muito alta ou muito baixa
- Colocar ganhar ouro sempre no final dos combates
- SObre a mensagem de reputação e de ganho de ouro eu setei uma mensagem automatica nos métodos. Tiramos para mostrar uma mensagem melhor no terminal pro jogador de acordo com a história que ta acontecendo no momento? (Um problema que notei ao jogar é que fica duas mensagens quando se ganha reputação, uma do método e outra colocado com console.log direto no codigo do caminho)
