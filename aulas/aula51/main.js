//Reduce -> Geralmente utilizado para reduzir o valor a um unico valor, mas voce consegue fazer Map e Filter com o Reduce

//Some todos os numeros
//Retorne um array com os pares (Filter);
//Retorne um array com o dobro dos valores (Map);
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const somaValores = numeros.reduce((acumulador, valor) => {
//     acumulador += valor;
//     return acumulador;
// }, 0);

// console.log(somaValores);


//Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 10},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]


const pessoaMaisVelha = pessoas.reduce((acumulador, obj) => {
    if(acumulador.idade >= obj.idade){
        return acumulador;
    }else{
        return obj;
    }
});

console.log(pessoaMaisVelha);
