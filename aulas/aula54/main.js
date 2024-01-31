// defineProperty -> Getter e Setters

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave da variavel
        configurable: false,//faz com que podssa ou nao apagar/reconfigurar a chave
        get: ()=> estoque,
        set: (valor) => {
            if (typeof valor !== 'number'){
                throw new TypeError('Estoque não é um "number"'); 
            }estoque = valor;
        }
    });
}

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);
// p1.estoque = 8;
// console.log(p1.estoque);


//Outra forma de fazer e ao meu ver mais legivel e mais facil
function criaProduto(nome, preco, estoque){
    return {
        nome: nome,
        preco: preco,
        get estoque(){
            return estoque;
        },
        set estoque(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Estoque não é um "number"'); 
            }estoque = valor;
        }
    };
}


const p2 = criaProduto('Camiseta', 20, 3);
p2.estoque = 7;
console.log(p2);

