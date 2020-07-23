function sacarDinheiro (valorSaque) {
    let cedula100 = 0
    let cedula50 = 0 
    let cedula20 =  0
    let cedula10 = 0
    let cedula5 = 0
    let cedula1 = 0
    let  valorCedula = calcularValorNota (valorSaque)
    while (valorSaque >= valorCedulas) {
    switch (valorCedulas) {
        case 100:
            valorSaque -= 100
            cedula100++
            break
         case 50:
             valorSaque =- 50
             cedula50++
             break
        case 20:
            valorSaque =- 20
            cedula20++
             break     
        case 10:
            valorSaque -=10
            cedula10++
            break
        case 5:
            valorSaque -= 5
            cedula5++
            break     
        case 1:
            valorSaque -=1
            cedula1++
            break   

    }
        valorCedula = sacarDinheiro(valorSaque)

    }
    return elaborarResultado(cedula100, cedula50, cedula20, cedula10, cedula5, cedula1)
}

function sacarDinheiro(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 20) {
        return 20
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(cedula100, cedula50, cedula20, cedula5, cedula1) {
    let resultado = ''

    if (cedula100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (cedula50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (cedula20 > 0) {
        resultado += `${cedula20} nota(s) de R$ 20. `
    }

    if (cedula10 > 0){
    resultado += `${cedula10} nota(s) de R$10.`
    }

    if (cedula5 > 0) {
        resultado += `${cedula5} nota(s) de R$ 5. `
    }

    if (cedula1 > 0) {
        resultado += `${cedula1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacarDinheiro(153));

