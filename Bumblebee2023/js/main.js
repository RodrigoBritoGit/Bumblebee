// Constantes armazenando as buscas por ids do braco do robo no html
const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")

// função sendo executado por evento de clique
controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDaddos(evento.target.textContent, evento.target.parentNode)
        somarEstatisticas(evento.target.dataset.peca)
    })
})

// Função responsável por subtrair ou somar peças do robo
function manipulaDaddos(operacao, controle) {
    const peca = controle.querySelector(".controle-contador")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1     
        subtrairEstatisticas(peca)  
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

// Funçao somar as estatisticas
function somarEstatisticas(peca) {

 estatisticas.forEach( (elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
 })
}

// função subtrair estatisticas
function subtrairEstatisticas(peca) {

    estatisticas.forEach( (elemento) => {
       elemento.textContent = parseInt(elemento.textContent) - 40
    })
   }

// constante que armazena os valores das estatisticas
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": 21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": 32,
        "velocidade": 32
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
    





