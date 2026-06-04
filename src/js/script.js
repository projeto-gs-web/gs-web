let imagens = [
    "src/assets/img/slide1.png",
    "src/assets/img/slide2.png",
    "src/assets/img/slide3.png",
];

let index = 1;

function trocarImagem(){
    document.getElementById("banner").src = imagens[index];
    index++;
    if(index >= imagens.length){
        index = 0;
    }
}

setInterval(trocarImagem, 3000);

const perguntas = [
    {
        pergunta: "Qual é o principal problema que o TAPS busca solucionar?",
        respostas: [
            { texto: "Falhas nos motores dos foguetes", correto: false },
            { texto: "Microfissuras internas em tanques reutilizáveis", correto: true },
            { texto: "Problemas de comunicação com satélites", correto: false },
            { texto: "Falhas em painéis solares", correto: false }
        ]
    },

    {
        pergunta: "Qual tecnologia é utilizada para captar vibrações estruturais?",
        respostas: [
            { texto: "Sensores de temperatura", correto: false },
            { texto: "GPS", correto: false },
            { texto: "Sensores piezoelétricos", correto: true },
            { texto: "Câmeras térmicas", correto: false }
        ]
    }, 

    {
        pergunta: "Para qual dispositivo os dados dos sensores são enviados inicialmente?",
        respostas: [
            { texto: "Arduino", correto: true },
            { texto: "Satélite", correto: false },
            { texto: "Drone", correto: false },
            { texto: "Servidor web", correto: false }
        ]
    },

    {
        pergunta: "Qual linguagem é utilizada para processar os dados coletados?",
        respostas: [
            { texto: "HTML", correto: false },
            { texto: "Java", correto: false },
            { texto: "CSS", correto: false },
            { texto: "Python", correto: true }
        ]
    },

    {
        pergunta: "O que o sistema T.A.P.S analisa para identificar possíveis falhas?",
        respostas: [
            { texto: "Emissões acústicas e vibrações", correto: true },
            { texto: "Velocidade do vento", correto: false },
            { texto: "Consumo de combustível", correto: false },
            { texto: "Sinais de GPS", correto: false }
        ]
    },

    {
        pergunta: "Qual é um dos principais benefícios do TAPS?",
        respostas: [
            { texto: "Aumentar o peso do foguete", correto: false },
            { texto: "Substituir os motores", correto: false },
            { texto: "Reduzir o tempo de inspeção", correto: true },
            { texto: "Produzir combustível", correto: false }
        ]
    },

    {
        pergunta: "Quem faz parte do público-alvo do projeto?",
        respostas: [
            { texto: "Empresas aeroespaciais", correto: true },
            { texto: "Redes sociais", correto: false },
            { texto: "Empresas gerais", correto: false },
            { texto: "Lojas virtuai", correto: false }
        ]
    },

    {
        pergunta: "Qual vantagem o diagnóstico automatizado oferece?",
        respostas: [
            { texto: "Fornece resultados rápidos e precisos", correto: true },
            { texto: "Aumentar a capacidade de armazenamento dos tanques", correto: false },
            { texto: "Reduzir o consumo de combustível durante o voo", correto: false },
            { texto: "Substituir completamente os sistemas de telemetria", correto: false }
        ]
    },

    {
        pergunta: "O que significa a sigla TAPS?",
        respostas: [
            { texto: "Tank Acoustic Predictive System", correto: true },
            { texto: "Telemetry Aerospace Protection System", correto: false },
            { texto: "Tank Analysis Process Solution", correto: false },
            { texto: "Telemetry Acoustic Prediction Software", correto: false }
        ]
    },

    {
        pergunta: "Por que a detecção precoce de microfissuras é importante?",
        respostas: [
            { texto: "Porque reduz a temperatura dos tanques durante o lançamento", correto: false },
            { texto: "Porque aumenta a velocidade de reentrada do foguete", correto: false },
            { texto: "Porque evita falhas estruturais e aumenta a segurança das missões", correto: true },
            { texto: "Porque elimina a necessidade de combustível criogênico", correto: false }
        ]
    },
]

const perguntaTexto = document.getElementById("pergunta-texto");
const btnContainer = document.getElementById("btn-container");
const resultadoContainer = document.getElementById("resultado-container");
const resultadoTexto = document.getElementById("resultado-texto");
 
let perguntaAtual = 0;
let pontos = 0;
 
function comecarQuiz() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const erro = document.getElementById("erro");
 
    if (nome === "" || email === "") {
        erro.classList.remove("oculto");
        return;
    }
 
    erro.classList.add("oculto");
    perguntaAtual = 0;
    pontos = 0;
 
    document.getElementById("tela-inicio").classList.add("oculto");
    document.getElementById("pergunta-container").classList.remove("oculto");
    resultadoContainer.classList.add("oculto");
 
    mostrarPergunta();
}
 
function mostrarPergunta() {
    resetar();
 
    let perguntaVista = perguntas[perguntaAtual];
    perguntaTexto.innerText = perguntaVista.pergunta;

    document.getElementById("progresso").innerText = 
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
 
    perguntaVista.respostas.forEach(resposta => {
        const botao = document.createElement("button");
        botao.innerText = resposta.texto;
        botao.classList.add("botoes");
 
        botao.addEventListener("click", () => {
            selecionarResposta(resposta.correto);
        });
 
        btnContainer.appendChild(botao);
    });
}
 
function resetar() {
    while (btnContainer.firstChild)
        btnContainer.removeChild(btnContainer.firstChild);
}
 
function selecionarResposta(acertou) {
    if (acertou) {
        pontos++;
    }
 
    perguntaAtual++;
 
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}
 
function mostrarResultado() {
    document.getElementById("pergunta-container").classList.add("oculto");
    resultadoContainer.classList.remove("oculto");
    resultadoTexto.innerText = `Sua pontuação foi ${pontos}/${perguntas.length}`;
}
 
function reiniciar() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
 
    perguntaAtual = 0;
    pontos = 0;
 
    document.getElementById("pergunta-container").classList.add("oculto");
    resultadoContainer.classList.add("oculto");
    document.getElementById("tela-inicio").classList.remove("oculto");
}