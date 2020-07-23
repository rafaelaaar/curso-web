const imprimirResultado = function(nota) {
    if(nota >=7) {
        console.log('Aprovado')
    }
    else{
        console.log('Reprovado')
    }
}
imprimirResultado(6.3)
imprimirResultado(7)
imprimirResultado('Epa!') //cuidado, não é visto como um erro!!