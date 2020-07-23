function classificacaoAluno (nota) {
    let notaCorrigida = arrendondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else{
        console.log (`Reprovado com nota ${notaCorrigida}`)
    }
}

function arrendondar (nota){
    if (nota%5 > 2) {
        return nota + ( 5- (nota % 5))
    } else {
        return nota
    }

}

classificacaoAluno(100)
classificacaoAluno(30)
classificacaoAluno(38)
classificacaoAluno(88)
classificacaoAluno(61)
