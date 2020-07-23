function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial * taxaDeJuros * tempoDeAplicacao
}

function jurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacao){
    return capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao

}   

console.log(jurosSimples(1000, 0.2, 2))

console.log(jurosCompostos(1000, 0.2, 2))