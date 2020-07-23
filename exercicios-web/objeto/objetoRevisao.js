// coleção dinâmica de pares chave/valor
const produto = new Object  // new = funcao construtora
produto.nome = "Cadeira"
produto['Marca do produto'] = 'Generica'
produto.preco = 200

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)


const carro = {
    Modelo: 'A4',
    valor: '89000',
    proprietario :{
        nome: 'Raul',
        idade:56,
        endereco: {
            lougradouro: 'Rua ABC',
            numero: 123,
        }
    },
    condutores: [{
        nome: "Junior",
        idade: 19,
    },{
        nome: "Ana",
        idade: 42
    }],
    calcularValorSeguro: function(){
        //..
    }

}

carro.proprietario.endereco.numero = 1000
carro ['proprietario']['endereco']['lougradouro'] = 'Av Gigante'
console.log(carro)


//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)