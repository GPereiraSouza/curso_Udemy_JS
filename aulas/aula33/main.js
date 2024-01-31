//for classico - Geralmente com iteraveis (array ou strings);
//for in - Retorna o indice ou chave (string, array ou objetos)
//for of - Retorna o valor em si (iteraveis, array ou strings)

const pessoa = ['Guilherme', 'Souza', 24];


for(i in pessoa){
    console.log(pessoa[i]);
}

console.log('#####');

for(valor of pessoa){
    console.log(valor);
}

console.log('#####');

pessoa.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});