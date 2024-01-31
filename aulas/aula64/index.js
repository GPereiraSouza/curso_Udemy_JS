class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} esta falando`);
    }
}

function Pessoa2(nome, sobrenome){}


const p1 = new Pessoa('Guilherme', 'Souza');

console.log(p1);
