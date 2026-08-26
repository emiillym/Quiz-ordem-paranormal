// =====================================================
// PERGUNTAS
// =====================================================

const perguntas = [

    {
        pergunta: "Qual dessas opções combina mais com você?",
        respostas: [
            "Calma e observadora",
            "Impulsiva e corajosa",
            "Misteriosa e reservada",
            "Caótica e imprevisível"
        ]
    },

    {
        pergunta: "Você encontra algo estranho sozinho. O que faz?",
        respostas: [
            "Investigo",
            "Saio correndo",
            "Fico observando de longe",
            "Encosto pra ver o que acontece"
        ]
    },

    {
        pergunta: "Qual seria sua função em uma equipe?",
        respostas: [
            "Líder",
            "Estratégia",
            "A pessoa que resolve tudo",
            "A pessoa que causa problemas"
        ]
    },

    {
        pergunta: "Escolha uma coisa para levar para uma investigação.",
        respostas: [
            "Lanterna",
            "Câmera",
            "Um objeto estranho",
            "Nada. Vou na coragem"
        ]
    },

    {
        pergunta: "Qual ambiente você escolheria?",
        respostas: [
            "Uma biblioteca",
            "Uma floresta",
            "Uma cidade abandonada",
            "Uma casa antiga"
        ]
    },

    {
        pergunta: "Quando alguém te irrita, você...",
        respostas: [
            "Ignoro",
            "Respondo na hora",
            "Guardo para mim",
            "Faço uma vingança extremamente elaborada"
        ]
    },

    {
        pergunta: "Qual dessas cores combina mais com você?",
        respostas: [
            "Roxo",
            "Vermelho",
            "Preto",
            "Azul"
        ]
    },

    {
        pergunta: "Você prefere trabalhar...",
        respostas: [
            "Sozinho",
            "Com uma pessoa",
            "Em grupo",
            "Depende da situação"
        ]
    },

    {
        pergunta: "Você ouve um barulho atrás de você.",
        respostas: [
            "Olho imediatamente",
            "Ignoro",
            "Corro",
            "Pergunto 'quem tá aí?'"
        ]
    },

    {
        pergunta: "Qual dessas palavras te representa?",
        respostas: [
            "Determinação",
            "Curiosidade",
            "Mistério",
            "Caos"
        ]
    },

    {
        pergunta: "Qual seria sua maior qualidade?",
        respostas: [
            "Inteligência",
            "Coragem",
            "Lealdade",
            "Criatividade"
        ]
    },

    {
        pergunta: "E seu maior defeito?",
        respostas: [
            "Teimosia",
            "Impulsividade",
            "Desconfiança",
            "Curiosidade demais"
        ]
    },

    {
        pergunta: "Você encontra uma porta trancada.",
        respostas: [
            "Procuro a chave",
            "Arrombo",
            "Vou embora",
            "Tento descobrir o que tem atrás"
        ]
    },

    {
        pergunta: "Qual dessas coisas mais te interessa?",
        respostas: [
            "Histórias",
            "Mistérios",
            "Pessoas",
            "Coisas inexplicáveis"
        ]
    },

    {
        pergunta: "Se pudesse escolher um poder, seria...",
        respostas: [
            "Ler mentes",
            "Ficar invisível",
            "Controlar objetos",
            "Ver coisas que ninguém mais vê"
        ]
    },

    {
        pergunta: "Qual situação seria mais assustadora?",
        respostas: [
            "Ficar sozinho no escuro",
            "Ouvir alguém te chamando",
            "Ver algo se mexendo sozinho",
            "Perceber que alguém está te observando"
        ]
    },

    {
        pergunta: "Você confia facilmente nas pessoas?",
        respostas: [
            "Sim",
            "Às vezes",
            "Quase nunca",
            "Só depois de muito tempo"
        ]
    },

    {
        pergunta: "Escolha uma frase:",
        respostas: [
            "Tudo tem uma explicação.",
            "Eu preciso descobrir.",
            "Não sei se isso foi uma boa ideia.",
            "Ah, quer saber? Vamos."
        ]
    },

    {
        pergunta: "Você percebe que alguma coisa está errada.",
        respostas: [
            "Investigo",
            "Aviso todo mundo",
            "Finjo que não vi",
            "Continuo mesmo assim"
        ]
    },

    {
        pergunta: "Última pergunta. Você acha que sabe quem vai aparecer?",
        respostas: [
            "Sim",
            "Provavelmente",
            "Não faço ideia",
            "Com certeza não"
        ]
    }

];


// =====================================================
// ELEMENTOS
// =====================================================

const quiz =
    document.getElementById("quiz");

const pergunta =
    document.getElementById("pergunta");

const alternativas =
    document.getElementById("alternativas");

const contador =
    document.getElementById("contador");

const progresso =
    document.getElementById("progresso");

const resultado =
    document.getElementById("resultado");

const jumpscare =
    document.getElementById("jumpscare");

const finalTroll =
    document.getElementById("finalTroll");

const audioSusto =
    document.getElementById("audioSusto");

const audioHell =
    document.getElementById("audioHell");


// =====================================================
// VARIÁVEL
// =====================================================

let perguntaAtual = 0;


// =====================================================
// MOSTRAR PERGUNTA
// =====================================================

function mostrarPergunta() {

    const dados =
        perguntas[perguntaAtual];


    contador.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;


    progresso.style.width =
        `${((perguntaAtual + 1) / perguntas.length) * 100}%`;


    pergunta.innerHTML =
        corromperTexto(
            dados.pergunta,
            perguntaAtual
        );


    alternativas.innerHTML = "";


    dados.respostas.forEach(
        (resposta) => {

            const botao =
                document.createElement("button");


            botao.className =
                "alternativa";


            botao.innerHTML =
                corromperTexto(
                    resposta,
                    perguntaAtual
                );


            botao.addEventListener(
                "click",
                proximaPergunta
            );


            alternativas.appendChild(
                botao
            );

        }
    );

}


// =====================================================
// CORRUPÇÃO DO TEXTO
// =====================================================

function corromperTexto(texto, nivel) {

    // Nas primeiras perguntas,
    // quase não acontece nada.

    let chance =
        0;

    if (nivel >= 5) {
        chance = 0.08;
    }

    if (nivel >= 8) {
        chance = 0.15;
    }

    if (nivel >= 11) {
        chance = 0.23;
    }

    if (nivel >= 14) {
        chance = 0.32;
    }

    if (nivel >= 17) {
        chance = 0.45;
    }


    if (Math.random() > chance) {

        return texto;
    }


    const letras =
        texto.split("");


    // Escolhe uma posição aleatória.

    const posicao =
        Math.floor(
            Math.random() *
            letras.length
        );


    // Ignora espaços.

    if (
        letras[posicao] === " "
    ) {

        return texto;
    }


    const letra =
        letras[posicao];


    // Algumas letras ficam vermelhas.

    if (Math.random() < 0.5) {

        letras[posicao] =
            `<span class="vermelho glitch">${letra}</span>`;

    }

    else {

        // Pequena corrupção visual.

        const caracteres =
            ["#", "@", "%", "?", "!", "̷"];

        const estranho =
            caracteres[
                Math.floor(
                    Math.random() *
                    caracteres.length
                )
            ];


        letras[posicao] =
            `<span class="vermelho glitch">${estranho}</span>`;
    }


    return letras.join("");
}


// =====================================================
// PRÓXIMA PERGUNTA
// =====================================================

function proximaPergunta() {

    perguntaAtual++;


    if (
        perguntaAtual >= perguntas.length
    ) {

        mostrarResultado();

        return;
    }


    mostrarPergunta();

}


// =====================================================
// RESULTADO
// =====================================================

function mostrarResultado() {

    quiz.classList.add(
        "escondido"
    );


    resultado.classList.remove(
        "escondido"
    );


    // Depois de mostrar o resultado,
    // espera alguns segundos.

    setTimeout(
        iniciarJumpscare,
        5000
    );

}


// =====================================================
// JUMPSCARE
// =====================================================

function iniciarJumpscare() {

    resultado.classList.add(
        "escondido"
    );


    jumpscare.classList.add(
        "mostrar"
    );


    // Toca o susto.

    audioSusto.currentTime = 0;

    audioSusto.play()
        .catch(
            erro => console.log(
                "Áudio bloqueado:",
                erro
            )
        );


    // Mantém a aranha por aproximadamente 1,8s.

    setTimeout(
        () => {

            jumpscare.classList.remove(
                "mostrar"
            );


            // Espera aproximadamente 3 segundos
            // antes do segundo áudio.

            setTimeout(
                mostrarHellNah,
                3000
            );

        },
        1800
    );

}


// =====================================================
// HELL NAH
// =====================================================

function mostrarHellNah() {

    finalTroll.classList.add(
        "mostrar"
    );


    audioHell.currentTime = 0;

    audioHell.play()
        .catch(
            erro => console.log(
                "Áudio bloqueado:",
                erro
            )
        );

}


// =====================================================
// COMEÇAR
// =====================================================

mostrarPergunta();
