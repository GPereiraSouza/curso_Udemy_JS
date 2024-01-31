//Diferenças entre var e let/const

//Let tem escopo de bloco { ... bloco}
//Var tem escopo de função

const truE = true;

let nome = 'Guib'; //criando variavel
var nome2 = 'Souza';//criando var

if(truE){
    let nome = 'Guilherme'; //criando outra variavel dentro do escopo
    // console.log(nome, nome2);

    if(truE){
        var nome2 = 'ROnaldo';
        let nome = 'Outro nome';
        console.log(nome, nome2);
    }
}