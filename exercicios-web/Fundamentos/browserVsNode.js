let a = 3
global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log (a)
console.log(global.b)
console.log(this.c)
console.log(this.d)
console.log(this.e)


console.log(module.exports.c)

console.log(module.exports === this)

console.log(module.exports)

//criando uma variavel maluca: sem let e var!
abc = 7  // nao faça isso me casa!!! 
console.log(global.abc)

