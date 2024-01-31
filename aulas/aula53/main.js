// defineProperty - define Properties

function Produto(nome, preco, estoque){
    Object.defineProperties(this, {
        nome: {
            enumerable: true, //Mostra a chave da variavel
            value: nome,   //faz com que o valor da variavel fique "publico"
            writable: true,   //faz com que possa ou nao alterar o valor da variavel
            configurable: false  //faz com que podssa ou nao apagar/reconfigurar a chave
        },
        preco: {
            enumerable: true, //Mostra a chave da variavel
            value: preco,   //faz com que o valor da variavel fique "publico"
            writable: true,   //faz com que possa ou nao alterar o valor da variavel
            configurable: false  //faz com que podssa ou nao apagar/reconfigurar a chave
        },
        estoque: {
            enumerable: true, //Mostra a chave da variavel
            value: estoque,   //faz com que o valor da variavel fique "publico"
            writable: true,   //faz com que possa ou nao alterar o valor da variavel
            configurable: false  //faz com que podssa ou nao apagar/reconfigurar a chave
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 50000;
// delete p1.estoque;
// console.log(p1);

console.log(p1.nome);

// for (let chave in p1){
//     console.log(chave);
// }