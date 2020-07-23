function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }

}

console.log(criarProduto("Toalha", 34))
console.log(criarProduto( "Escova", 25))