function calcularReajuste (plano, salarioAtual) {
    switch (plano) { // talvez seja plano de trabalho
        case 'A':
            console.log(salarioAtual + (salarioAtual * 0.10))
            break
        case 'B':
            console.log(salarioAtual + (salarioAtual * 0.15))
            break
        case 'C':
            console.log(salarioAtual + (salarioAtual * 0.20))
            break
        default:
            console.log("Plano inválido")
    }
}

calcularReajuste('A', 1000)
calcularReajuste('B', 1000)
calcularReajuste('C', 1000)
calcularReajuste('D', 1000)