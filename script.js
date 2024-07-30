const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a sua fruta favorita?",
        alternativas: [
            {
                texto: "Maçã",
                afirmacao: "afirmação"
            },
            {
                texto: "Banana",
                afirmacao: "afirmação"
            },
            {
                texto: "Laranja",
                afirmacao: "afirmação"
            },
            {
                texto: "Manga",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual é o seu passatempo preferido?",
        alternativas: [
            {
                texto: "Ler livros",
                afirmacao: "afirmação"
            },
            {
                texto: "Assistir a filmes",
                afirmacao: "afirmação"
            },
            {
                texto: "Praticar esportes",
                afirmacao: "afirmação"
            },
            {
                texto: "Jogar videogames",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Se você pudesse viajar para qualquer lugar do mundo, para onde iria?",
        alternativas: [
            {
                texto: "Paris",
                afirmacao: "afirmação"
            },
            {
                texto: "Tóquio",
                afirmacao: "afirmação"
            },
            {
                texto: "Nova York",
                afirmacao: "afirmação"
            },
            {
                texto: "Sydney",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual tipo de comida você mais gosta?",
        alternativas: [
            {
                texto: "Italiana",
                afirmacao: "afirmação"
            },
            {
                texto: "Japonesa",
                afirmacao: "afirmação"
            },
            {
                texto: "Mexicana",
                afirmacao: "afirmação"
            },
            {
                texto: "Brasileira",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual é o seu animal de estimação ideal?",
        alternativas: [
            {
                texto: "Cachorro",
                afirmacao: "afirmação"
            },
            {
                texto: "Gato",
                afirmacao: "afirmação"
            },
            {
                texto: "Peixe",
                afirmacao: "afirmação"
            },
            {
                texto: "Pássaro",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    // Limpa as alternativas antigas
    caixaAlternativas.innerHTML = '';

    // Verifica se todas as perguntas foram respondidas
    if (atual >= perguntas.length) {
        caixaPerguntas.textContent = "Obrigado por participar do quiz!";
        caixaAlternativas.innerHTML = ''; // Limpa as alternativas finais
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function () {
            // Adiciona uma classe para feedback visual (opcional)
            botaoAlternativas.classList.add("selecionado");

            // Avança para a próxima pergunta após um pequeno atraso
            setTimeout(function () {
                atual++;
                mostraPergunta();
            }, 500); // Ajuste o atraso conforme necessário
        });
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
