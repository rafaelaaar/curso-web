function mediaAritmetica (vetor){
    let soma = 0
    for (i= 0; i < vetor.length; i++){
         soma += vetor[i]
    }
    return soma/vetor.length
}

vetor = [ 1, 2, 3]
console.log(mediaAritmetica(vetor))


