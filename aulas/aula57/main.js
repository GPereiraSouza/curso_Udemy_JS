//Construtora -> molde (classe)
function Pessoa(nome, sobrenome){  
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function (){ 
    return this.nome + ' ' + this.sobrenome;
}


//Esses 2 codigos sao a mesma coisa a questao é que uma function contruction -> molde de uma classe.
// class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
//     nomeCompleto() {
//         return this.nome + ' ' + this.sobrenome;
//     }
// }

//instancia
const pessoa1 = new Pessoa('Luiz', 'O.');
const pessoa2 = new Pessoa('Maria', 'A.');

console.dir(pessoa1);
console.dir(pessoa2);
