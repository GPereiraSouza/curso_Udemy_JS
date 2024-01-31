//When a function does not specte a parameter and when u call the function with parameter u can manipulate this parameters.
// function argumento(){
//     let total = 0;

//     for(let argumentos of arguments){
//         total += argumentos;
//     }

//     console.log(total);
// }

// function funcao([valor1, valor2, valor3]){
//     console.log(valor1, valor2, valor3);
// }
// let array = ['Gui', 'Sou', 24];
// funcao(array);

const conta = function(operador, acumulador, ...numeros){
    for (let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};

conta('*', 0, 20, 30, 40, 50);