let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"


function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebradRecordes = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes [0]
    let menorPontuacao = pontuacoes [0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            qtdQuebradRecordes++
        } else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [ qtdQuebradRecordes, piorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes)) 
