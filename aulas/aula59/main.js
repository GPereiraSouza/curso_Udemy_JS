function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

//Cria o obj ja dizendo diretamente de qual função ela é logo utiliza seu prototype, desta forma p1 não tem acess
const p1 = new Produto('Camiseta', 50);

//Cria o obj das os valores/chaves existentes e depois seta o prototype de p2
const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);

//Cria o obj e seta o prototype que vai usar
const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Short'
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    }
})

p3.aumento(10);

console.log(p1);
console.log(p2);
console.log(p3);
