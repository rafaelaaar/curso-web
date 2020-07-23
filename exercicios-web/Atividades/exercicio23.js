function media(nota1, nota2, nota3){
    media = [(nota1 * 4) + (nota2 * 3)+ (nota3 * 3)]/(4 + 3 + 3) 
        if (media >=5){
            return "Aprovado"
        } else {
            return "Reprovado"
        }
    
}
console.log(media(4, 6, 8))


function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)