function comprarCarro (carro) {
    switch (carro) {
    case 'Hatch':
        console.log ('Compra efetuada com sucesso')
        break
    case 'Sedan':
    case 'Motocicleta':
    case 'caminhonete':
        console.log ('Tem certeza que não prefere este modelo?')
        break
    default:
        console.log ("Não trabalhamos com este tipo de automóvel aqui")
    }


}

comprarCarro('Sedan')
comprarCarro('Hatch')
comprarCarro('Uno')