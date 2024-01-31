//Map -> sempre retorna um array com mesmo tamanho do array original so que alterando os valores

//Dobre os numeros
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosDobrados = numeros.map((valor)=> valor * 2);

// console.log(numerosDobrados);


//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const apenasString = pessoas.map((obj) => obj.nome);
// const removeNome = pessoas.map((obj) => {
//     delete obj.nome;
//     return obj;
// });
//Outra maneira de remover o nome é criando um novo obj com apenas as idades
const apenasIdades = pessoas.map((obj) => ({idade: obj.idade}));

//Se voce nao criar um novo obj dentro desta Arrow Function voce ira atribuir o valor original em "obj" e altera o array original;
//Desta forma  se deseja manter o array original intacto e apenas criar um novo array com base no original, voce tem que criar um novo obj dentro da function.
const addID = pessoas.map((obj, indice) => {
    const newObj = {... obj};
    newObj.id = indice;
    return newObj;
});

console.log(pessoas);
console.log(addID);
