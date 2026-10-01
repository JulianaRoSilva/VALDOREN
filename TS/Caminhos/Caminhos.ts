import { ask, clear, consoleSaindo, stop } from "../Auxiliares/Auxiliares";
import { blue, cyan, green, purple, red, white } from "../Auxiliares/Cores";
import { Personagem } from "../Personagens/Personagem"
import { Inimigo } from "../Interfaces/Inimigo";
import { Esqueleto } from "../Inimigos/Esqueleto";
import { loja } from "../Inventario/Loja";
import { Dragao } from "../Inimigos/Dragao";
import { FadaCorrompida } from "../Inimigos/FadaCorrompida";
import { Fantasma } from "../Inimigos/Fantasma";
import { iniciarConfronto } from "../Inimigos/Confronto";
import { Saqueador } from "../Inimigos/Saqueador";
import { ReiOssos } from "../Inimigos/ReiOssos";

/*COMENTÁRIOS
Criei um inimigo que será um boss
Alterei o CASE 1 da PARTE 2, PARTE4ESCADALATERAL
CAMINHO2PARTE5 coloquei confronto com o BOSS
*/

let encontrouReiOssos: boolean = false;

//INICIO GAME
export const inicio = (personagem: Personagem): void => {
    
    while (true) {
        clear();
        cyan(
            '\nA Chegada a Ravenfall.\n' +
    
            '\nVocê chega a Ravenfall ao anoitecer, com a poeira da estrada ainda nas botas.' +
            '\nNo caminho até a entrada da cidade, seu pé esbarra em algo enterrado na terra' +
            '\nsolta à beira da estrada. Você se abaixa e encontra uma moeda antiga, desgastada,' +
            '\ncom um símbolo estranho gravado em uma das faces — parecido com os relatos' +
            '\nque você ouviu sobre as Catacumbas de Valdoren.\n' +
            '\nEla parece não ter valor nenhum como dinheiro. Talvez seja só uma velha moeda');
        blue(

            '\n1- Pegar a moeda e guardá-la' +
            '\n2- Ignorar e seguir viagem' +
            '\n3- Sair do game'
        );

        const escolhaMoeda: number = Number(ask.question('Escolha: '));

        let opcaoValida: boolean = escolhaMoeda === 1 || escolhaMoeda === 2 || escolhaMoeda === 3;

        if (!opcaoValida) {

            clear()
            red('Opção inválida!');
            stop()
            continue;
        }

        switch (escolhaMoeda) {
            case 1:
                personagem.pegarMoeda();
                clear();
                cyan(
                    '\nVocê guarda a moeda no bolso. Ela está gelada ao toque, mesmo depois' +
                    '\nde minutos carregando-a. Você não sabe explicar por que, mas sente que' +
                    '\nfez a escolha certa.\n');
                stop();
                parte1(personagem);
                break;

            case 2:

                clear();
                cyan(
                    '\nVocê dá de ombros e chuta a moeda de volta para a terra. Provavelmente' +
                    '\né só mais um pedaço de metal sem valor. Você segue em frente sem' +
                    '\nolhar para trás.\n');
                stop();
                parte1(personagem);
                break;

            case 3:
                consoleSaindo();
                process.exit();

        }
        break;
    }
}

// Início PARTE 1
export const parte1 = (personagem: Personagem): void => {
    clear();
    
    while (true) {
        clear()
        cyan(
            '\nAs ruas de Ravenfall estão quase vazias – portas trancadas cedo, olhares' +
            '\ndesconfiados nas janelas. No centro da praça, um sino distante ainda ecoa' +
            '\nem sua memória, embora tenha parado de tocar há três dias.' +
    
            '\n\nVocê vê um mapa rasgado e esfarrapado voando em meio às casas na cidade e vai até ele e o pega.' +
            '\nNeste mapa, há um nome escrito na borda' +
    
            '\n\n"Se estiver em perigo, me procure. Ass. Mestre Averic"' +
    
            '\n\nAlém disso, há um caminho traçado em vermelho no mapa que vai até a "Taverna do Corvo Cinza"' +
            '\nVocê precisa decidir por onde começar.');
        blue(

            '\n1- Ir a caminho da Taverna do Corvo Cinza' +
            '\n2- Procurar o tal Mestre Averic' +
            '\n3- Sair do game'
        );

        const escolhaParte1: number = Number(ask.question('Escolha: '));

        let opcaoValida: boolean = escolhaParte1 === 1 || escolhaParte1 === 2 || escolhaParte1 === 3;

        if (!opcaoValida) {
            clear();
            red('Opção inválida!');
            stop();
            continue;
        }

        switch (escolhaParte1) {
            case 1:
                caminho1Pt1(personagem); // ir pra taberna
                break;

            case 2:
                caminho2Pt1(personagem); // procurar o tal mestre Averic
                break;

            case 3:
                consoleSaindo();
                process.exit();

        }
        break;
    }
}

////Caso personagem escolha IR A TAVERNA DO CORVO CINZA
export const caminho1Pt1 = (personagem: Personagem): void => {
    clear();
    cyan(
        '\nVocê inicia o trajeto até a Taverna do Corvo Cinza. Você fica tranquilo' +
        '\nporque é perto da entrada da cidade onde tudo começou.\n' +
        '\nVocê entra na Taverna do Corvo Cinza em busca de informações' +
        '\nsobre o que ouve desde a infância: o mistério de Valdoren, que sempre despertou sua curiosidade.' +
        '\nAgora, pela primeira vez, você está perto de descobrir a verdade.\n' +
        '\nVocê senta no balcão e começa a beber um pouco para relaxar após a viagem árdua.' +
        '\nEntre risadas e bebedeira, você acaba se envolvendo em uma discussão boba' +
        '\ncom um bêbado, que espalha pela cidade que você é "mais um forasteiro' +
        '\nmetido a besta".\n');

    personagem.setReputacao(-5);
    stop();

    clear();
    cyan(

        '\nMesmo assim, entre uma rodada e outra, você ouve histórias contraditórias:' +
        '\nuns dizem que um culto quer reabrir um antigo selo de Valdoren; outros juram que os' +
        '\nmortos de Eryndor estão voltando. Um velho caçador, bêbado o suficiente' +
        '\npara não mentir, murmura que viu "algo com muitos olhos" saindo das' +
        '\ncatacumbas.\n' +

        '\nEm meio à confusão, você ouve um nome sendo repetido por alguns clientes:' +
        '\nTom. Dizem que ele conhece as catacumbas como a palma da mão e vive' +
        '\noferecendo seus serviços como guia para quem tiver coragem - e ouro -' +
        '\npara pagar por isso.\n');

    stop();
    parte2(personagem);

}

//Caso personagem escolha PROCURAR MESTRE AVERIC
export const caminho2Pt1 = (personagem: Personagem): void => {
    clear();
    cyan(
        '\nVocê vai à procura do Mestre Averic, após ficar curioso de quem seria ele.\n' +
        'Você avista um pequeno comércio de carnes aberto no centro da cidade,\n' +
        'com o vendedor no balcão afiando sua faca.\n' +

        'Ao entrar no estabelecimento, pergunta ao comerciante:\n');
    stop();

    clear();
    green(`${personagem.getNome()}: Olá! Cheguei na cidade agora após uma viagem cansativa, você tem alguma bebida forte?`)
    cyan(`Comerciante: Tenho uma dose de cachaça. Serve?\n`);
    stop();

    clear();
    cyan(
        '\nVocê aceita e ele lhe serve a bebida. Você começa a conversar com o comerciante e' +
        '\nquestiona se, por acaso, ele conhece um tal de Mestre Averic.' +
        '\nEle lhe responde que sim, normalmente, ele vai ao bordel no final da rua 7 e' +
        '\nveste um chapéu verde musgo e fuma charuto.' +

        '\nVocê agradece a ele e sai do comércio e verifica no mapa se há algum caminho' +
        '\npara a rua 7 e, segue viagem\n');

    stop();
    clear();

    cyan(
        '\nAo chegar ao bordel, logo ao entrar, você avista um homem muito parecido com o retrato' +
        '\nque o comerciante falou sentado em uma mesa, sozinho, bebendo uma cerveja.' +
        '\nEle o recebe com respeito, reconhecendo sua disposição em ajudar Ravenfall' +
        '\nem um momento tão delicado. Aos poucos, boatos sobre um forasteiro' +
        '\nconfiável começam a circular.\n');
    personagem.setReputacao(10);
    stop();

    clear();
    cyan(
        '\nAveric confirma que foi ele quem pagou pela sua vinda. Há séculos, os' +
        '\nantigos reis de Valdoren selaram algo nas Catacumbas de Valdoren, e agora' +
        '\nalguém está tentando abrir esse selo.');

    cyan(
        '\nUm homem alto chamado Tom, misterioso e com uma barba por fazer, ' +
        '\nque estava ouvindo a conversa na mesa de trás, diz a você que, se quiser,' +
        '\npode te ajudar a encontrar as terras de Valdoren,' +
        '\nmas que cobrará um preço para isso acontecer.\n');

    stop();
    parte2(personagem);

}

// Início PARTE 2
export const parte2 = (personagem: Personagem): void => {
    clear();
    
    while (true) {
        cyan(
            '\nDe um jeito ou de outro, fica claro: as respostas estão embaixo da terra,' +
            '\nnas Catacumbas de Valdoren.');
        blue(

            '\n1- Aceitar ajuda de um guia local (Tom)' +
            '\n2- Ir sozinho' +
            '\n3- Sair do game'
        );

        const escolhaParte2: number = Number(ask.question('Escolha: '));

        let opcaoValida: boolean = escolhaParte2 === 1 || escolhaParte2 === 2 || escolhaParte2 === 3;

        if (!opcaoValida) {
            clear()
            red('Opção inválida!');
            stop()
            continue;
        }

        switch (escolhaParte2) {
            case 1:
                //Chance de pegar o boss
                const chance: number = Math.random();
                if (!encontrouReiOssos && chance < 0.10) {
                    encontrouReiOssos = true;
                    caminho1Pt2(personagem, new ReiOssos(), true);
                    break;
                } else {
                    caminho1Pt2(personagem, new Esqueleto(), false);
                    break;
                }

            case 2:
                caminho2Pt2(personagem, new Saqueador());
                break;

            case 3:
                consoleSaindo();
                process.exit();


        }
        break;
    }
}

////Caso personagem escolha ACEITA AJUDA DE UM GUIA LOCAL
export const caminho1Pt2 = (personagem: Personagem, inimigo: Inimigo, eReiOssos: boolean): void => {
    clear();
    
    while (true) {
        cyan(
            '\nTom se aproxima, oferecendo seus serviços como guia.' +
            '\nEle conhece entradas esquecidas nas catacumbas, mas quer saber como' +
            '\nserá pago.');
        blue(

            '\n1- Pagar Tom adiantado (10 de ouro)' +
            '\n2- Prometer pagamento depois' +
            '\n3- Sair do game'
        );

        const escolhaTom: number = Number(ask.question('Escolha: '));

        let opcaoValida: boolean = escolhaTom === 1 || escolhaTom === 2 || escolhaTom === 3;

        if (!opcaoValida) {
            clear()
            red('Opção inválida!');
            stop()
            continue;
        }

        switch (escolhaTom) {
            case 1:
                if (personagem.pagarOuro(10)) {
                    clear();
                    cyan(
                        '\nVocê paga Tom adiantado. Satisfeito, ele se compromete a guiá-lo até' +
                        '\no fim, sem hesitar.');

                    personagem.setReputacao(5);
                    white('\n(-10 de ouro)');
                    stop();

                } else {
                    clear();
                    cyan(
                        '\nVocê tenta pagar Tom, mas não tem ouro suficiente. Ele franze a testa,' +
                        '\ndesconfiado, mas aceita guiá-lo mesmo assim, sem receber nada agora.');
                    stop();
                }
                break;

            case 2:
                clear();
                cyan(
                    '\nVocê promete pagar Tom depois. Ele aceita, desconfiado, mas guarda' +
                    '\nessa promessa na memória.');
                stop();
                break;

            case 3:
                consoleSaindo();
                process.exit();

        }
        break; // sai do while depois de uma escolha valida
    }

    // A traição de Tom
    clear();
    cyan(
        '\nVocê e Tom saem juntos e seguem em direção às catacumbas.' +
        '\nTom, o guia, conduz você por passagens estreitas e pouco iluminadas no trajeto, desviando dos' +
        '\nguardas da cidade com uma facilidade suspeita - ele conhece esses' +
        '\ncaminhos bem demais para alguém que apenas "ouviu falar" das catacumbas.' +

        '\n\nNo meio do trajeto, ele para de repente diante de uma câmara empoeirada no início da floresta.');
    cyan(
        '\nTom para diante da câmara e observa a escuridão por alguns segundos.' +
        '\nPela primeira vez desde que começaram a caminhar, ele parece realmente inquieto.');
    if (eReiOssos) {
        cyan(
            '\nAntes que você possa reagir, ele bate duas vezes na parede de pedra.' +
            '\nUm estalo seco ecoa entre os ossos empilhados ao redor da câmara - e um' +
            '\ndeles começa a se mover.' +
            '\n\nPor alguns segundos, tudo fica em silêncio.' +
            '\n\nEntão...' +
            '\n\nCLACK...' +
            '\n\nUm osso cai do teto.' +
            '\n\nCLACK...' +
            '\n\nOutro.' +
            '\n\nTom para por um instante.' +
            '\n\nEle olha para trás.' +
            '\n\n— Não...' +
            '\n\nVocê percebe que ele está realmente assustado.' +
            '\n\n— O que foi? — você pergunta.' +
            '\n\nTom não responde.' +
            '\n\nO chão começa a tremer.' +
            '\n\nOs ossos espalhados pela câmara começam a se mover' +
            '\nsozinhos, arrastando-se lentamente uns contra os outros.' +
            '\n\nUma mão surge da escuridão.' +
            '\n\nDepois outra.' +
            '\n\nUm corpo inteiro começa a se erguer.' +
            '\n\nTom recua.' +
            '\n\n— Eu sabia que havia algo aqui...' +
            '\n\n— Mas não sabia que era ELE...' +
            '\n\nVocê olha para a criatura.' +
            '\n\nUma coroa enferrujada repousa sobre seu crânio.'
        );

    } else {
        cyan('\n\nAntes que você possa reagir, ele bate duas vezes na parede de pedra.' +
            '\nUm estalo seco ecoa entre os ossos empilhados ao redor da câmara - e um' +
            '\ndeles começa a se mover. Um esqueleto se ergue das sombras, guiado por' +
            '\numa vontade que não é mais a sua.')
    }

    cyan('\n\nTom desaparece corredor afora, deixando você sozinho com a criatura.');
    personagem.setReputacao(-5);
    white('\n(Ravenfall saberá que você foi enganado com facilidade)');
    stop();

    //Combate aqui.
    iniciarConfronto(personagem, inimigo);

    clear();
    cyan(
        eReiOssos
            ? '\nO combate é difícil, mas você consegue derrotar o Rei dos Ossos. Ele desaba' +
            '\ndiante de você, mas a sensação de que algo muito maior está despertando' +
            '\nnas profundezas das catacumbas não desaparece.'
            : '\nO combate é difícil, mas você consegue destruir o esqueleto, que desaba' +
            '\nem um monte de ossos inertes no chão. Ofegante, você entende agora que' +
            '\nnem toda ajuda em Ravenfall pode ser ingênua.');
    stop();

    clear();
    cyan(
        (eReiOssos
            ? '\nAinda abalado pelo encontro com o Rei dos Ossos, você segue sozinho pelo' +
            '\ncaminho que Tom havia prometido guiar. Sem ele, cada sombra parece' +
            '\nmais suspeita que a anterior.'
            : '\nAinda trêmulo pelo combate contra o esqueleto, você segue sozinho pelo' +
            '\ncaminho que Tom havia prometido guiar. Sem ele, cada sombra parece' +
            '\nmais suspeita que a anterior.') +

        '\n\nApós alguns minutos caminhando, uma luz amarelada surge entre as árvores' +
        '\n- um pequeno armazém de madeira, isolado nà beira da estrada, com fumaça' +
        '\nsaindo da chaminé. Uma placa gasta balança no vento: "ARMAZÉM DO ELFO LUCIO".' +

        '\n\nDepois do que acabou de enfrentar, parece um bom lugar para recuperar o' +
        '\nfôlego - e talvez gastar o que sobrou de ouro antes de entrar nas catacumbas' +
        '\nde verdade.');
    stop();

    loja(personagem);
    parte3(personagem);

}

// Caso o personagem escolha IR SOZINHO
export const caminho2Pt2 = (personagem: Personagem, inimigo: Inimigo): void => {
    clear();
    cyan(
        '\nSem o conhecimento de Tom sobre os caminhos, você confia apenas no mapa' +
        '\nrasgado - e ele se mostra menos confiável do que parecia. Uma bifurcação' +
        '\nque não está desenhada em lugar nenhum o faz entrar em um antigo cemitério' +
        '\nabandonado, cercado por lápides tortas e uma neblina baixa.' +

        '\nUm vulto se move entre os túmulos - um saqueador vasculha as ruínas em' +
        '\nbusca do mesmo segredo que você. Não há tempo para escolhas. Você luta.');
    stop();
    iniciarConfronto(personagem, inimigo);

    clear();
    cyan(
        '\nO combate é rápido e bruto. Você derrota o saqueador, mas sai com' +
        '\num corte no braço.');
    stop();

    clear();
    cyan(
        '\nCom o corte no braço ainda ardendo, você deixa o cemitério para trás,' +
        '\ndeterminado a não cometer o mesmo erro duas vezes. O mapa rasgado parece' +
        '\nainda menos confiável agora do que parecia horas atrás.' +

        '\n\nApós alguns minutos caminhando, uma luz amarelada surge entre as árvores' +
        '\n- um pequeno armazém de madeira, isolado nà beira da estrada, com fumaça' +
        '\nsaindo da chaminé. Uma placa gasta balança no vento: "ARMAZÉM DO ELFO LUCIO".' +

        '\n\nDepois do que acabou de enfrentar, parece um bom lugar para recuperar o' +
        '\nfôlego - e talvez gastar o que sobrou de ouro antes de entrar nas catacumbas' +
        '\nde verdade.');
    stop();

    loja(personagem);
    parte3(personagem);
}

// Início PARTE 3
export const parte3 = (personagem: Personagem): void => {
    clear();

    if (personagem.getTemMoeda()) {
        cyan(
            '\nVocê deixa o armazém para trás e retoma o caminho até as Catacumbas de' +
            '\nValdoren. Após horas caminhando, finalmente avista a entrada: um portão' +
            '\nde pedra coberto por símbolos antigos, que voltaram a brilhar com uma' +
            '\nluz azulada fraca.' +

            '\n\nAo se aproximar, a moeda em seu bolso esquenta de leve, como se' +
            '\nreconhecesse o símbolo gravado na pedra. Por um instante, você sente' +
            '\nque não está sozinho - que algo, lá dentro, já sabe que você chegou.' +
            '\nAo entrar pelo portão, voce avista uma pequena casa de madeira velha.' +
            '\nDentro dela, ao revistar os comodos, encontra um alçapão com uma escada ' +
            '\npara algum lugar subterraneo no porão. Só pode ser por ali.' +
            '\nAo descer as escadas, voce precisa decidir por qual caminho seguir.');

    } else {

        cyan(
            '\nVocê deixa o armazém para trás e retoma o caminho até as Catacumbas de' +
            '\nValdoren. Após horas caminhando, finalmente avista a entrada: um portão' +
            '\nde pedra coberto por símbolos antigos, que voltaram a brilhar com uma' +
            '\nluz azulada fraca.' +

            '\n\nVocê não sente nada além do peso do próprio cansaço.' +
            '\nAo entrar pelo portão, voce avista uma pequena casa de madeira velha.' +
            '\nDentro dela, ao revistar os comodos, encontra um alçapão com uma escada ' +
            '\npara algum lugar subterraneo no porão. Só pode ser por ali.' +
            '\nAo descer as escadas, voce precisa decidir por qual caminho seguir.');
    }

    white(
        '\n\nNo ar, um cheiro de terra molhada e metal. As tochas na parede ainda' +
        '\nardem, embora ninguém deveria estar ali há séculos.');
    stop();

    while (true) {
        
        blue(

            '\n1- Seguir o corredor principal (mais largo e iluminado, mas vigiado)' +
            '\n2- Descer por uma escada lateral (estreita, escura e silênciosa)' +
            '\n3- Sair do game'
        );

        const escolhaParte3: number = Number(ask.question('Escolha: '));

        let opcaoValida: boolean = escolhaParte3 === 1 || escolhaParte3 === 2 || escolhaParte3 === 3;

        if (!opcaoValida) {
            red('Opção inválida!');
            continue;
        }

        switch (escolhaParte3) {
            case 1:
                caminho1Pt3(personagem);
                break;

            case 2:
                caminho2Pt3(personagem);
                break;

            case 3:
                consoleSaindo();
                process.exit();
        }
        break;
    }
}

//Caso personagem escolha SEGUIR O CORREDOR PRINCIPAL
export const caminho1Pt3 = (personagem: Personagem): void => {
    clear();
    cyan(
        '\nVocê segue pelo corredor principal, mais largo e iluminado por tochas' +
        '\nque não deveriam mais estar acesas. O caminho desce suavemente, e o som' +
        '\nde vozes distantes começa a ecoar pelas paredes de pedra.' +

        '\n\nQuanto mais você avança, mais claro fica: você não está sozinho aqui' +
        '\nembaixo - e quem quer que esteja lá na frente, está fazendo barulho' +
        '\no suficiente para ser ouvido de longe.');
    stop();

    parte4CorredorPrincipal(personagem, new Fantasma());
}

//Caso personagem escolha DESCER PELA ESCADA LATERAL
export const caminho2Pt3 = (personagem: Personagem): void => {
    clear();
    cyan(
        '\nVocê opta pela escada lateral, estreita e sem luz alguma. Cada degrau' +
        '\nrange sob seus pés, e o silêncio ali embaixo é pesado demais para ser' +
        '\nconfortável.' +

        '\n\nApós descer o que parecem ser dezenas de degraus, você chega a uma' +
        '\ncâmara antiga. Ossos estão cuidadosamente organizados pelo chão, formando' +
        '\npadrões que claramente não são obra do acaso. No centro, uma inscrição' +
        '\ngravada na pedra avisa: "O que dorme aqui não sonha. Espera."');
    stop();

    parte4EscadaLateral(personagem);
}


//PARTE 4
export const parte4CorredorPrincipal = (personagem: Personagem, inimigo: Inimigo): void => {
    clear();
    cyan(
        '\nO corredor termina em um salão cerimonial imenso. Figuras encapuzadas' +
        '\nse movem ao redor de um pilar rachado no centro - o próprio selo,' +
        '\ngravado com o mesmo símbolo do sino da Catedral.');
    stop();

    if (personagem.getReputacao() >= 10) {
        clear();
        
        while (true) {
            cyan(
                '\nUm dos encapuzados se vira e hesita ao reconhecer você. Rumores' +
                '\nsobre um forasteiro confiável já correram por Ravenfall - ele parece' +
                '\ninseguro sobre atacar ou não.');
            white('\n(Sua reputação alta abriu uma chance de negociar.)');
            stop();
            blue(
                '\n1- Tentar negociar com o encapuzado' +
                '\n2- Atacar antes que ele reaja' +
                '\n3- Sair do game'
            );

            const escolhaNegociacao: number = Number(ask.question('Escolha: '));

            let opcaoValida: boolean = escolhaNegociacao === 1 || escolhaNegociacao === 2 || escolhaNegociacao === 3;

            if (!opcaoValida) {
                clear()
                red('Opção inválida!');
                stop()
                continue;
            }

            switch (escolhaNegociacao) {
                case 1:
                    clear();
                    cyan(
                        '\nVocê ergue as mãos, mostrando que não veio para lutar. O' +
                        '\nencapuzado hesita, olhando para os outros, e por fim murmura' +
                        '\nalgumas palavras: "Você não devia estar aqui... mas talvez' +
                        '\nisso ainda sirva para alguma coisa."\n' +

                        '\nEle entrega a você uma pequena bolsa de moedas e um fragmento' +
                        '\nde pergaminho antes de recuar entre as sombras junto aos outros.' +
                        '\n\n"O que vem a seguir não é problema meu. Boa sorte, forasteiro."');
                    personagem.setOuro(20);
                    personagem.setReputacao(10);
                    white('\n(+20 de ouro, +10 de reputação: sua fama te poupou de um confronto desnecessário)');
                    stop();
                    break;

                case 2:
                    clear();
                    cyan(
                        '\nMesmo com a hesitação dele, você decide não arriscar e ataca' +
                        '\nprimeiro. O encapuzado mal tem tempo de reagir antes de cair.' +
                        '\nOs outros se dispersam, alarmados com a violência repentina.');
                    personagem.setReputacao(-5);
                    white('\n(-5 de reputação: atacar alguém que hesitava em lutar não passou despercebido)');
                    stop();
                    break;

                case 3:
                    consoleSaindo();
                    process.exit();
            }
            break;
        }

    } else {
        clear();
        cyan(
            '\nEles nem hesitam. Para eles, você é apenas mais um intruso a ser' +
            '\neliminado. As figuras avançam.');
        stop();
    }

    clear();
    cyan(
        '\nAntes que qualquer coisa mais aconteça, uma presença gelada toma conta do salão.' +
        '\nAs tochas vacilam, e uma sombra atravessa o ritual.' +
        '\nUm fantasma surge entre os encapuzados, atraído pela energia liberada pelo selo.' +
        '\nEle encara você em silêncio antes de avançar.');

    stop();

    iniciarConfronto(personagem, inimigo);
    clear();
    cyan(
        '\nO combate é intenso, mas você consegue derrotar o fantasma.' +
        '\nAssustados com o que acabaram de testemunhar, os encapuzados fogem pelos corredores,' +
        '\ndeixando o salão em completo silêncio.');
    stop();

    while (true) {
        blue(

            '\n1- Revistar o local em busca de valores' +
            '\n2- Seguir em frente sem tocar em nada' +
            '\n3- Sair do game'
        );

        const escolhaSaque: number = Number(ask.question('Escolha: '));

        let opcaoValida: boolean = escolhaSaque === 1 || escolhaSaque === 2 || escolhaSaque === 3;

        if (!opcaoValida) {
            red('Opção inválida!');
            continue;
        }

        switch (escolhaSaque) {
            case 1:
                clear();
                cyan(
                    '\nVocê revista o local rapidamente e encontra uma bolsa com' +
                    '\nmoedas escondida atrás de uma das pilastras. Depois de tudo o que' +
                    '\naconteceu, você decide não perder mais tempo ali.');
                personagem.setOuro(15);
                personagem.setReputacao(-5);
                white('\n(+15 de ouro, -5 de reputação)');
                stop();
                break;

            case 2:
                clear();
                cyan(
                    '\nVocê decide não tocar em nada. Seja lá o que estivesse' +
                    '\nacontecendo aqui, não é sua parte nisso.');
                stop();
                break;

            case 3:
                consoleSaindo();
                process.exit();
        }
        break;
    }

    parte5(personagem);
}

export const parte4EscadaLateral = (personagem: Personagem): void => {
    clear();
    cyan(
        '\nAo virar um corredor estreito, você avista uma luz fraca vindo de uma' +
        '\ncâmara adiante. Figuras encapuzadas se movem em silêncio ao redor de um' +
        '\naltar improvisado, murmurando palavras em uma língua antiga - um ritual' +
        '\nestá em andamento, e você chegou bem no meio dele.');
    stop();

    while (true) {
        blue(
            '\n1- Confrontar os responsáveis pelo ritual' +
            '\n2- Recuar e sabotar o ritual em silêncio' +
            '\n3- Sair do game'
        );

        const escolhaParte4: number = Number(ask.question('Escolha: '));

        let opcaoValida: boolean = escolhaParte4 === 1 || escolhaParte4 === 2 || escolhaParte4 === 3;

        if (!opcaoValida) {
            red('Opção inválida!');
            continue;
        }

        switch (escolhaParte4) {
            case 1:
                //Chance de pegar o boss
                const chance: number = Math.random();
                if (!encontrouReiOssos && chance < 0.30) {
                    encontrouReiOssos = true;
                    caminho1Pt4(personagem, new ReiOssos(), true);
                    break;
                } else {
                    caminho1Pt4(personagem, new FadaCorrompida(), false);
                    break;
                }

            case 2:
                caminho2Pt4(personagem);
                break;

            case 3:
                consoleSaindo();
                process.exit();
        }
        break;
    }
}

// Caso o personagem escolha CONFRONTAR
export const caminho1Pt4 = (personagem: Personagem, inimigo: Inimigo, eReiOssos: boolean): void => {
    clear();
    cyan(
        '\nVocê avança sem hesitar, surpreendendo quem quer que estivesse por' +
        '\nperto. O confronto é curto, mas brutal - e barulhento demais para' +
        '\npassar despercebido.');
    personagem.setReputacao(-5);
    white('\n(-5 de reputação: a violência no local não passou despercebida)');
    stop();
    if (eReiOssos) {
        cyan(
            '\nOs cultistas continuam murmurando.' +
            '\n\nAs palavras ficam cada vez mais rápidas.' +
            '\n\nEntão...' +
            '\n\nBOOM!' +
            '\n\nUma das tochas se apaga.' +
            '\n\nDepois outra.' +
            '\n\nE outra.' +
            '\n\nO salão inteiro mergulha na escuridão.' +
            '\n\nVocê escuta um som vindo debaixo do altar.' +
            '\n\nCLACK...' +
            '\n\nCLACK...' +
            '\n\nCLACK...' +
            '\n\nOs cultistas param.' +
            '\n\nUm deles sussurra:' +
            '\n\n— O selo...' +
            '\n\nOutro responde:' +
            '\n\n— Não fomos nós que o chamamos.' +
            '\n\nO chão começa a rachar.' +
            '\n\nUma mão feita apenas de ossos atravessa a pedra.' +
            '\n\nOs cultistas começam a fugir.' +
            '\n\nEntão uma figura se ergue lentamente.' +
            '\n\nUma coroa antiga.' +
            '\n\nUma espada enferrujada.' +
            '\n\nOlhos brilhando dentro de um crânio.' +
            '\n\nO silêncio toma conta da sala.' +
            '\n\n— Quem ousou perturbar meu sono?')
    } else {
        cyan(
            '\nEntre os ossos espalhados pelo chão, uma luz fraca e doentia começa' +
            '\na pulsar. O que parecia ser apenas uma câmara vazia revela sua' +
            '\nverdadeira guardiã: uma fada corrompida, atraída pelo barulho, com' +
            '\nasas rasgadas e um brilho verde-pálido nos olhos - tudo o que restou' +
            '\nde uma criatura que um dia foi bela.');
    }
    stop();

    iniciarConfronto(personagem, inimigo);
    clear();
    cyan(
        '\nVocê vence o confronto, mas sem tempo para procurar nada além do' +
        '\nque precisa. Segue em frente, ofegante.');
    stop();

    parte5(personagem);
}

// Caso o personagem escolha SABOTAR EM SILÊNCIO
export const caminho2Pt4 = (personagem: Personagem): void => {
    clear();
    cyan(
        '\nVocê se move com cuidado, evitando qualquer confronto direto. Entre' +
        '\nas sombras, encontra um pequeno baú escondido atrás de uma pilastra -' +
        '\nesquecido há tempos, mas ainda com algumas moedas dentro.');
    personagem.setOuro(10);
    white('\n(+10 de ouro)');
    stop();

    clear();
    cyan(
        '\nCom paciência, você sabota o mecanismo do ritual sem ser notado.' +
        '\nRavenfall jamais saberia o quanto isso custou - mas você sabe.');
    personagem.setReputacao(5);
    white('\n(+5 de reputação: sua discrição evitou um banho de sangue)');
    stop();

    parte5(personagem);
}

// EXPLORAÇÃO: ENCONTRAR ITENS
export const encontrarItens = (personagem: Personagem): void => {
    clear();
    cyan(
        '\nVocê encontra uma pequena sala escondida atrás de uma parede quebrada.' +
        '\nNo chão há uma mochila antiga coberta de poeira. Dentro dela, você encontra' +
        '\nalgumas moedas antigas e objetos enferrujados que parecem não ter mais utilidade.' +
        '\n\nVocê pega as moedas e deixa o restante para trás.'
    );

    personagem.setOuro(10);
    white('\n(+10 de ouro)');
    stop();
};

// PARTE 5
export const parte5 = (personagem: Personagem): void => {
    clear();

    encontrarItens(personagem);

    if (personagem.getTemMoeda()) {
        clear();
        cyan(
            '\nOs encapuxados vão embora, sem saber que não voltariam uma outra vez.' +
            '\nEntre os destroços do ritual, você encontra documentos antigos' +
            '\nescondidos atrás do pilar rachado. A moeda em seu bolso combina' +
            '\nperfeitamente com um carimbo vazio nos papéis - ela não era apenas' +
            '\num achado qualquer. Era parte do mecanismo do selo o tempo todo.' +
            '\nEles revelam a verdadeira natureza do selo:' +
            '\nos antigos reis de Valdoren não simplesmente trancaram' +
            '\num monstro, mas um poder capaz de reescrever quem governa o reino.'
        );
    } else {
        cyan(
            '\nEntre os destroços do ritual, você encontra documentos antigos' +
            '\nescondidos atrás do pilar rachado. Eles revelam a verdadeira' +
            '\nnatureza do selo: os antigos reis de Valdoren não simplesmente trancaram' +
            '\num monstro, mas um poder capaz de reescrever quem governa o reino.');
    }
    stop();

    clear();
    white(
        '\nAgora você precisa decidir o que fazer com essa verdade.' +
        '\nÉ realizado ritual noite por noite para manter a cidade refem da maldição de Valdoren e' +
        '\nfazer com que o monstro continue selado nas ruinas subterraneas de Valdoren.'
    );

    while (true) {
        blue(

            '\n1- Selar as catacumbas pra sempre e manter a maldição' +
            '\n2- Deixar o selo se romper e acabar com a maldição' +
            '\n3- Sair do game'
        );

        const escolhaParte5: number = Number(ask.question('Escolha: '));

        let opcaoValida: boolean = escolhaParte5 === 1 || escolhaParte5 === 2 || escolhaParte5 === 3;

        if (!opcaoValida) {
            red('Opção inválida!');
            continue;
        }

        switch (escolhaParte5) {
            case 1:
                caminho1Pt5(personagem);
                break;

            case 2:
                caminho2Pt5(personagem);
                break;

            case 3:
                consoleSaindo();
                process.exit();
        }
        break;
    }
}

//Caso personagem escolha SELAR NOVAMENTE
export const caminho1Pt5 = (personagem: Personagem): void => {
    clear();
    cyan(
        '\nVocê decide esconder essa verdade do mundo, como fizeram os reis' +
        '\nantigos antes de você. Ninguém em Ravenfall precisa saber o que' +
        '\nquase aconteceu aqui embaixo.');
    personagem.setReputacao(-5);
    white('\n(-5 de reputação: guardar segredos tem um preço, mesmo sem ninguém saber)');
    stop();

    clear();
    cyan(
        '\nAo se afastar do pilar rachado, um rugido profundo e distante ecoa pelas' +
        '\npedras - grave demais para ser humano, próximo demais para ser ignorado.' +
        '\nVocê sente o chão vibrar de leve sob seus pés e percebe que não está tão' +
        '\nsozinho nas profundezas quanto pensava.');
    stop();

    parte6(personagem, new Dragao(), false, false);
}

//Caso personagem escolha DEIXAR O SELO SE ROMPER
export const caminho2Pt5 = (personagem: Personagem): void => {
    clear();
    cyan(
        '\nVocê decide que o que foi aprisionado merece uma chance de ser' +
        '\njulgado, não esquecido para sempre. É uma aposta - e talvez Ravenfall' +
        '\nnão concorde com ela.');
    personagem.setReputacao(5);
    white('\n(+5 de reputação: a coragem da escolha impressiona quem está por perto)');
    stop();

    parte6(personagem, new ReiOssos(), true, encontrouReiOssos);
}

//FINAL
export const parte6 = (personagem: Personagem, inimigo: Inimigo, romperSelo: boolean, jaEncontrouReiOssos: boolean): void => {
    clear();
    if (romperSelo) {
        cyan(
            '\nVocê retorna pelo caminho até a câmara final.' +
            '\n\nA cada passo, o ar parece ficar mais pesado.' +
            '\n\nAs paredes das catacumbas começam a tremer levemente.' +
            '\n\nVocê percebe que algo está diferente.' +
            '\n\nO silêncio que antes dominava o caminho agora é interrompido' +
            '\npor pequenos estalos vindos das profundezas.' +
            '\n\nCLACK...' +
            '\n\nCLACK...' +
            '\n\nCLACK...' +
            '\n\nVocê continua avançando.' +
            '\n\nAo chegar à câmara final, você percebe que o selo está rachado.' +
            '\n\nUma energia escura escapa pelas fissuras da pedra.' +
            '\n\nEntão, o chão começa a tremer violentamente.' +
            '\n\nOs ossos espalhados pela câmara começam a se mover.' +
            '\n\nUm após o outro, eles começam a se juntar no centro da sala.' +
            '\n\nUma mão surge entre os ossos.' +
            '\n\nDepois outra.' +
            '\n\nUma figura começa a se levantar lentamente.' +
            '\n\nUma antiga coroa repousa sobre seu crânio.' +
            '\n\nUma espada enferrujada surge em sua mão.' +
            '\n\nDois olhos sombrios brilham dentro de sua face.' +
            '\n\nVocê finalmente percebe quem está diante de você.' +
            (jaEncontrouReiOssos
                ? '\n\nO REI DOS OSSOS ESTÁ DIANTE DE VOCÊ NOVAMENTE.'
                : '\n\nO REI DOS OSSOS DESPERTOU.'));
        stop();
    } else {
        cyan(
            '\nAntes de seguir para o coração das catacumbas, você passa por uma' +
            '\npequena barraca improvisada, deixada para trás por algum viajante -' +
            '\nou talvez por alguém que não conseguiu voltar. Ainda há itens' +
            '\nutilizáveis ali. Talvez valha a pena gastar o que resta do seu ouro' +
            '\nantes do que vem pela frente.');
        stop();
        loja(personagem);
    }


    if (!romperSelo) {
        clear();
        cyan(
            '\nVocê retoma o caminho até a câmara final. Lá, o Dragão, guardião da entrada do selo,' +
            '\nse ergue diante de você — a última linha de defesa entre você e o' +
            '\ndestino de Valdoren.');
        stop();
    }

    // Reação do inimigo final baseada na reputação acumulada durante a jornada
    clear();

    if (romperSelo) {
        if (personagem.getReputacao() >= 10) {
            if (jaEncontrouReiOssos) {
                purple(
                    '\nO Rei dos Ossos permanece em silêncio por alguns segundos, observando você.' +
                    '\n\nSeus olhos brilham através do crânio.' +
                    '\n\n— Então é você... aquele que ousou desafiar as trevas destas catacumbas.' +
                    '\n\nEle ergue lentamente sua espada enferrujada.' +
                    '\n\n— Poucos chegaram tão longe.' +
                    '\n\n— Mas sua reputação já chegou antes de você.' +
                    '\n\nO Rei dos Ossos assume sua posição de combate.' +
                    '\n\n— Mostre-me se você realmente é digno de estar aqui.');
            } else {
                purple(
                    '\nO Rei dos Ossos ergue lentamente a cabeça, observando você.' +
                    '\n\nSeus olhos brilham dentro do crânio.' +
                    '\n\n— Então foi você quem chegou até meu selo.' +
                    '\n\nEle ergue lentamente sua espada enferrujada.' +
                    '\n\n— Poucos chegam tão longe.' +
                    '\n\n— Ouvi falar da sua reputação até mesmo entre os mortos.' +
                    '\n\nO Rei dos Ossos assume sua posição de combate.' +
                    '\n\n— Mostre-me se você realmente é digno de estar aqui.');
            }
            stop();
        } else if (personagem.getReputacao() <= -10) {
            if (jaEncontrouReiOssos) {
                purple(
                    '\nO Rei dos Ossos observa você em silêncio por alguns segundos.' +
                    '\n\nSeus olhos brilham intensamente dentro do crânio.' +
                    '\n\n— Então é você...' +
                    '\n\n— O mesmo que espalhou medo e destruição por onde passou.' +
                    '\n\nEle aperta sua espada enferrujada.' +
                    '\n\n— Sua fama chegou até estas catacumbas.' +
                    '\n\n— Você não veio em busca de respostas.' +
                    '\n\n— Veio em busca de poder.' +
                    '\n\nO Rei dos Ossos ergue sua espada.' +
                    '\n\n— Então prove que merece carregá-lo.');
            } else {
                purple(
                    '\nO Rei dos Ossos solta um rosnado profundo antes mesmo de você se aproximar.' +
                    '\n\n— Sei quem você é.' +
                    '\n\n— Ouvi falar do sangue e da destruição que deixou pelo caminho.' +
                    '\n\n— Você não veio em busca de respostas. Veio em busca de poder.' +
                    '\n\nO Rei dos Ossos ergue sua espada.' +
                    '\n\n— E eu não tenho piedade para quem só pensa em si.');
            }
            red('\n(A fúria do Rei dos Ossos parece mais intensa que o normal...)');
            stop();
        } else {
            purple(
                '\nO Rei dos Ossos observa você em silêncio por alguns segundos.' +
                '\n\nSeus olhos permanecem fixos em você, tentando decidir o que fazer.' +
                '\n\n— Você chegou até aqui sem conquistar nem o respeito nem o ódio dos vivos.' +
                '\n\nEle ergue lentamente sua espada.' +
                '\n\n— Agora veremos o que existe por trás de suas escolhas.');
            stop();
        }
    } else {
        if (personagem.getReputacao() >= 10) {
            purple(
                '\nO Dragão ergue a cabeça lentamente, os olhos antigos fixos em você.' +
                '\n\n— Ouvi falar de você em Ravenfall... o forasteiro que ajudou mais' +
                '\ndo que destruiu.' +
                '\n\n— Poucos chegam até aqui carregando tanta confiança de quem deixaram' +
                '\npara trás. Isso não muda o que preciso fazer, mas... você tem meu' +
                '\nrespeito antes da batalha.');
            stop();
        } else if (personagem.getReputacao() <= -10) {
            purple(
                '\nO Dragão solta um rosnado profundo antes mesmo de você se aproximar.' +
                '\n\n— Sei quem você é.' +
                '\n\n— O mesmo que saqueou os mortos e traiu quem confiou em você para chegar até aqui.' +
                '\n\n— Não veio em busca de respostas. Veio em busca de poder.' +
                '\n\n— E eu não tenho piedade para quem só pensa em si.');
            red('\n(A fúria do Dragão parece mais intensa que o normal...)');
            stop();
        } else {
            purple(
                '\nO Dragão observa você em silêncio por um instante, avaliando o intruso à sua frente.' +
                '\n\n— Você chegou até aqui sem conquistar nem o respeito nem o ódio dos vivos.' +
                '\n\n— Mas isso não significa que seja digno de passar por mim.' +
                '\n\n— Vamos descobrir o que realmente existe em seu coração.');
            stop();
        }
    }

    iniciarConfronto(personagem, inimigo);
    clear();
    cyan(
        romperSelo
            ? '\nApós um combate exaustivo, o Rei dos Ossos finalmente cai.' +
            '\nO silêncio retorna à câmara, mas o selo permanece rompido.'
            : '\nApós um combate exaustivo, o Dragão finalmente cai, e o caminho' +
            '\naté o selo está livre.');
    stop();

    clear();

    if (romperSelo) {
        if (personagem.getReputacao() >= 20) {
            white('\n=== FINAL: O Despertar Aceito ===');
            cyan(
                '\nO selo permanece rompido, liberando uma energia antiga que ninguém em Ravenfall' +
                '\nserá capaz de ignorar. O Rei dos Ossos foi derrotado, mas sua libertação' +
                '\ndeixa marcas profundas nas catacumbas.' +
                '\n\nRavenfall recebe o novo amanhecer com cautela, mas não com pânico.' +
                '\nSua reputação entre os vivos abriu caminho para que sua escolha seja ouvida.');
        } else {
            white('\n=== FINAL: O Despertar Temido ===');
            cyan(
                '\nO selo permanece rompido, e a energia liberada pelas catacumbas se espalha' +
                '\npelas profundezas de Valdoren.' +
                '\n\nO Rei dos Ossos foi derrotado, mas ninguém em Ravenfall sabe o que sua libertação' +
                '\npode trazer. Você deixa as catacumbas carregando o peso da sua escolha.');
        }
    } else {
        if (personagem.getTemMoeda()) {
            clear();
            white('\n=== FINAL SECRETO: O CORAÇÃO DE VALDOREN ===');
            cyan(
                '\nA moeda começa a brilhar intensamente em sua mão.' +
                '\nO símbolo gravado nela deixa de ser apenas uma marca: ele se transforma' +
                '\nem uma pequena runa azul, exatamente igual à que existe no centro do selo.' +
                '\n\nUma parte da parede se move lentamente, revelando uma câmara que esteve' +
                '\nescondida por séculos. No centro há um pedestal de pedra com uma inscrição:' +
                '\n\n"Somente aquele que encontrou a chave pode escolher o destino de Valdoren."');
            stop();

            while (true) {
                blue(
                    '\n1- Colocar a moeda no pedestal' +
                    '\n2- Guardar a moeda e fechar a câmara' +
                    '\n3- Sair do game'
                );

                const escolhaMoedaFinal: number = Number(ask.question('Escolha: '));

                let opcaoValida: boolean = escolhaMoedaFinal === 1 || escolhaMoedaFinal === 2 || escolhaMoedaFinal === 3;

                if (!opcaoValida) {
                    red('Opção inválida!');
                    continue;
                }

                switch (escolhaMoedaFinal) {
                    case 1:
                        clear();
                        cyan(
                            '\nVocê coloca a moeda no pedestal.' +
                            '\n\nPor alguns segundos, nada acontece.' +
                            '\nEntão, as paredes das Catacumbas começam a tremer.' +
                            '\nO selo se fecha completamente, mas uma energia antiga percorre seu corpo.' +
                            '\n\nUma voz ecoa pela câmara:' +
                            '\n"Você não encontrou apenas uma moeda. Você encontrou a chave."');
                        personagem.setOuro(50);
                        personagem.setReputacao(20);
                        white('\n(+50 de ouro, +20 de reputação)');
                        stop();

                        clear();
                        white('\n=== FINAL VERDADEIRO: O NOVO GUARDIÃO ===');
                        cyan(
                            '\nA câmara secreta se transforma em um santuário antigo.' +
                            '\nVocê encontra um baú contendo moedas de Valdoren e um símbolo real.' +
                            '\n\nA partir daquele dia, Ravenfall passa a contar uma nova lenda:' +
                            '\nA lenda do viajante que chegou à cidade sem saber seu destino,' +
                            '\nencontrou a moeda perdida e impediu que o poder de Valdoren' +
                            '\ncaísse nas mãos erradas.' +
                            '\n\nVocê não destruiu o poder.' +
                            '\nVocê se tornou seu guardião.');
                        stop();
                        white('\n\nFIM DE JOGO. Obrigado por jogar!');
                        process.exit();


                    case 2:
                        clear();
                        cyan(
                            '\nVocê olha para a moeda uma última vez e decide não colocá-la no pedestal.' +
                            '\n\nA passagem secreta começa a desaparecer, mas antes de fechar,' +
                            '\nvocê percebe uma inscrição escondida na parede:' +
                            '\n\n"Quando Valdoren precisar novamente, a moeda encontrará seu próximo dono."');
                        personagem.setReputacao(10);
                        white('\n(+10 de reputação)');
                        stop();
                        white('\n\n=== FINAL: O GUARDIÃO SILENCIOSO ===');
                        cyan(
                            '\nVocê deixa as catacumbas levando consigo o segredo da moeda.' +
                            '\nTalvez sua aventura em Valdoren tenha terminado...' +
                            '\nmas a história da moeda ainda não.');
                        stop();
                        white('\n\nFIM DE JOGO. Obrigado por jogar!');
                        process.exit();


                    case 3:
                        consoleSaindo();
                        process.exit();
                }
            }
        } else {
            white('\n=== FINAL: O SILÊNCIO ETERNO ===');
            cyan(
                '\nO selo é reforçado, mas de forma incompleta e instável.' +
                '\nRavenfall nunca saberá a verdade, mas o selo pode, um dia,' +
                '\nvoltar a se romper.');
        }
    }

    stop();
    white('\n\nFIM DE JOGO. Obrigado por jogar!');
    process.exit();
}