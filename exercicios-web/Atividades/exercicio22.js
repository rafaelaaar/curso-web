function valorDaAnuidade(valor,mes){
    if(mes>0 && mes <13) {
    atraso = mes - 1 
    return valor * (1.05 * atraso).toFixed(2)
} else {
    return " Mês inválido"
}
}

console.log(valorDaAnuidade(1000, 4))



