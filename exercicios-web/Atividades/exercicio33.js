function vetores (){
    let vetorInteiro = [10, 3, 6, 7, 12, 15]
    let vetorString = ["Olá", "Tudo", "Bom", "?"]
    let vetorDouble = [1.3, 3.4, 5.3, 5.6, 8.2, 10.4, 13.6] 
        return (vetorInteiro + vetorString + vetorDouble)

}

console.log(vetores())


let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))