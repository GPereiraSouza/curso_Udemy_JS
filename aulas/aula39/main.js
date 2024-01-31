// return

// function criaPessoa(nome, sobrenome){
//     return {nome, sobrenome};
// }

// const p1 = criaPessoa('luiz', 'otavio'); //This 2 person its same thing. But p1 I'm use the function for creat the person.
// const p2 = {
//     nome: 'gui',
//     sobrenome : 'souza'
// };

// console.log(typeof p1);
// console.log(typeof p2);


// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + resto;
//     }
//     return falaResto;
// }

// const ola = falaFrase('olá');
// const mundo = ola(', mundo!');

// console.log(mundo);


function criaMulti(multi){
    return function(n) {  
        return n * multi;
    }
}

const duplica = criaMulti(2);
const triplica = criaMulti(3);
const quadriplica = criaMulti(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));