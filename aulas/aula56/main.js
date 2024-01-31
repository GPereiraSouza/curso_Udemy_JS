const produto = {
    nome: 'Produto',
    preco: 1.8
};

// Object.defineProperty(produto, 'nome',{
//     writable: false,
//     configurable: false
// });


//Retorna os valores dentro das "defineProperty"
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

//Para pegar apenas o valor dentro de um obj é  utilizando "Object.values(nomedoObjeto);"
// console.log(Object.values(produto));

//Para pegar apenas o valor das chaves de um obj é utilizando "Object.keys(nomedoObjeto);"
// console.log(Object.keys(produto));

//Para pegar tanto o valor das chaves quanto o valor do obj é utilizando "Object.entrie(nomedoObjeto);"
// console.log(Object.entries(produto));