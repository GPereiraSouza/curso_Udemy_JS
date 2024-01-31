//Herança
//Produtos -> //Produtos -> nas duas tem aumento e desconto
//Vende -> Camiseta = Cor, caneca = Material

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(valor){this.preco += valor};
Produto.prototype.desconto = function(valor){this.preco -= valor};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.contructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual /100));
}

function Caneca(nome, preco, material){ 
    Produto.call(this, nome, preco);
    this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.contructor = Caneca;


const produto = new Produto('Gen', 111);
const camiseta = new Camiseta ('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 10, 'Porcelana');

console.log(produto);
console.log(camiseta);
console.log(caneca);
