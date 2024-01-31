const produto = {
    nome: 'Produto',
    preco: 1.8
};

/*
 //Se voce simplesmente atribui um novo obj a outro voce nao esta copiando os valores e sim apontando para o local da memoria do obj principal
 //Logo qualquer alteração que fizer em "caneca", ira alterar os valores de produto.
 const caneca = produto;
*/ 

/*
 //Uma das formas de copiar os valores de um obj dentro de outro obj é "espalhando" = "...nomedoObjeto".
 const caneca = {
     ...produto,
     material: 'porcelana'
 };
*/

/*
 //Outra maneira de copiar os valores de um obj para outro obj, "Object.assign({}, nomedoObjeto)"
 const caneca = Object.assign({}, produto, {material: 'porcelana'});
*/


caneca.nome = 'Caneca';
caneca.preco = 2.5;

console.log(produto);
console.log(caneca);
