const diaDaSemana = function (dia){
    switch(Math.floor(dia)) {
        case 1:
        case 7:
            console.log('Final de semana')
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log("Dia útil")
                break
        default:
            console.log('dia inválido')
                
    }
}
diaDaSemana(3)
diaDaSemana(9)
diaDaSemana(7)
