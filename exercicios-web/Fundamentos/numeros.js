const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

//const total = avaliacao1 * peso1 + avaliacao2 * peso2
//const media = total / (peso1+peso2)

const media = [(avaliacao1 * peso1) + (avaliacao2 * peso2)]/(peso1 + peso2)
// meu modo de fazer haha

console.log(media.toFixed(2))
console.log(media.toString(2))  // Converte em binário
//console.log(typeof Number)

//a partir daqui foram estudos meus.

function classificao (media) {
if (media >= 7){
    return "Aprovado"
} else {
    return "Reprovado"
}
}
console.log(classificao(media))


//meus comentãrios
//console.log(typeof peso2)
//console.log(typeof peso1)