function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    //When u want this objetc to never change, u use the proprety "Object.freeze(this).". Then any thing u do out of this obj will not happen.
    Object.freeze(this);
}

const p1 = new Pessoa('Guilherme', 'Souza');
p1.nome = 'Outro NOME';
const p2 = new Pessoa('Ana', 'Fag');

console.log(p1);
console.log(p2);
