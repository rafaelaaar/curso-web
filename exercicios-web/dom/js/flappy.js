function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

// criando a barreira funcao construtora
function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    //  dizendo se a barreira fica em cima ou em baixo
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`

}

// const b = new Barreira(true)
// b.setAltura(300)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x) {
    // x -> posicao que sera colocada o par de barreiras
    this.elemento = novoElemento('div', 'par-de-barreiras')
    // o novo elemento é uma div que tem uma classe 'par-de-barreiras'

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)
    // false pois ela é uma barreira reversa, assim como na funcao barreira
    //se trocar o this por const o atributo barreira passa a ser privado

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    //sortear onde a barreira ira aparecer
    this.sortearAbertura = () => {
        //abertura é fixa por recebe como parametro o tamanho
        //da abertura que quero dar o par de barreiras
        //entao calcula-se, de forma aleatoria o tamanho de um dos lados
        // e o outro lado calcula-se subtraindo a altura de um dos lados
        // menos a altura da abertura
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    //saber em que posicao o par de barreiras esta
    this.setX = x => this.elemento.style.left = `${x}px`
    //altera o x
    this.getLargura = () => this.elemento.clientWidth
    //saber a largura do elemento

    //sorteando a abertura
    this.sortearAbertura()
    //definindo onde a barreira vai aparecer
    this.setX(x)
    //funcao par-de-barreira foi imprementada

}

// const b = new ParDeBarreiras(700, 200, 400)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)
            //depois que a barreira sair ela tem que voltar, ficar em loop
            //quando o elemento sair da tela (area do jogo)
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }
            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio
            //acabou de cruzar o meio
            if (cruzouOMeio) notificarPonto()
        })
    }
}

function Passaro (alturaJogo) {
    let voando = false
    //para saber ate aonde o passaro pode ir

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false 

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -4)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }  
    }
    this.setY(alturaJogo / 2)
}


function Progresso () {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

// const barreiras = new Barreiras(700, 1200, 200, 400)
// const passaro = new Passaro (700)
// const areaDoJogo = document.querySelector('[wm-flappy]')

// areaDoJogo.appendChild(passaro.elemento)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// setInterval(() => {
//     barreiras.animar()
//     passaro.animar()
// },20)

// funcao para chegar se acontece a colisao

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >=b.left
    && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top
    && b.top + b.height >= b.top
    return horizontal && vertical
}

function colidiu(passaro, barreiras) {
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        if (!colidiu) {
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior)
            || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}




function FlappyBird() {
    let pontos = 0 
    
    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso(0)
    const barreiras = new Barreiras(altura, largura, 200, 400, 
        () => progresso.atualizarPontos(++pontos))
        const passaro =  new Passaro(altura)

        areaDoJogo.appendChild(progresso.elemento)
        areaDoJogo.appendChild(passaro.elemento)
        barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

        this.start = () => {
            //loop do jogo
            const temporizador = setInterval(() =>{
                barreiras.animar()
                passaro.animar()

                if(colidiu(passaro, barreiras)) {
                    clearInterval(temporizador)
                }
            }, 20)
        }
}
 new FlappyBird().start()