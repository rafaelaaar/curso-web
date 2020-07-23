function classificacaoTriangulo (lado1, lado2, lado3) {
    if (lado1 == lado2 &&  lado2 == lado3){
        return "Triangulo Equilatero"
}
    else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
       return "Triangulo Isocelis"

    }
    else{
        return "Triangulo Escaleno"
    }
}

console.log(classificacaoTriangulo(4, 5, 3))
console.log(classificacaoTriangulo(4, 4, 3))
console.log(classificacaoTriangulo(4, 4, 4))