let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#sorteado')
let dadoRolando = document.querySelector('#dadoRolando')

btnSortear.addEventListener('click', function() {

//adicionar animação
imgDado.classList.add('animar')
sorteado.classList.add('aparecer')

//tocar o efeito sonoro
dadoRolando.play()

//ocultar o botao sortear
btnSortear.style.display = 'none'

//usar setTimeout para executar as acoes apos 0.75s
setTimeout(function () {

    //armazenar numero sorteado na variavel
    numeroSorteado = getRandomInt(1,6)

    //escrever o numero sorteado no console
    console.log(numeroSorteado)

    //definir atributo src com base no numero
    imgDado.setAttribute('src', '../dado/'+numeroSorteado+'.png')

    //escrever paragrafo do numero sorteado
    sorteado.textContent = numeroSorteado

    //exibir o botao sortear
    btnSortear.style.display = 'inline-block'

    //retirar a animacao
    imgDado.classList.remove('animar')
    sorteado.classList.remove('aparecer')
}, 750)
})

//funcao que gera um numero random inteiro (incluindo min. e max.)
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}