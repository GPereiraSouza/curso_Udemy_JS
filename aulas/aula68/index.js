function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, tempo){
    return new Promise((resolve, reject) =>{
        
        setTimeout(()=>{
            if(typeof msg !== 'string'){
                reject('Cai no ERRO');
                return;
            }

            resolve(msg.toUpperCase() + '- Passei na promise');
            return;
        }, tempo)
    });
}

const promises = [
    // 'Primeiro valor',
    wait('Promise 1', rand(1 ,5)),
    wait('Promise 2', rand(1 ,5)),
    wait('Promise 3', rand(1 ,5)),
    // 'outro valor'
];

//Promise.all = "Resolve" todas as promessas e depois retorna todos os valores de volta sem ordem de retorno e se uma "PROMISE" der "reject" ela para de executar e retorna o que estiver na reject 

// Promise.all(promises)
// .then(function(valor){
//     console.log(valor);
// })
// .catch(function(err){
//     console.log(err)
// });


//Promise.race = "Resolve" o que seria mais rapido de resolver e retorna, por exemplo neste caso por 'Primeiro valor' e 'outro valor' nao serem uma promise vai retornar logo o 'Primeiro valor'. Já se nao tivesse esses 2 valores, o codigo com a função Primise.race iria verificar qual das 3 "PROMISE" iriam ser executadas primeiro e iria retornar.// Na race se a primeira "PROMISE" não for a "reject" o codigo executa de qualquer maneira a que foi entregue primeiro, logo ganhando a "corrida" por isso se chama ".race"
// Promise.race(promises)
// .then(function(valor){
//     console.log(valor);
// })
// .catch(function(err){
//     console.log(err)
// });


//Promise.resolve
// function baixaPagina(){
//     const emCache = false;

//     if(emCache){
//         return Promise.resolve('Pagina em cache');
//     } else {
//         return wait('Baixei a pagina', 3000)
//     }
// }

// baixaPagina()
// .then(dadosPagina =>{
//     console.log(dadosPagina);
// })
// .catch(e => console.log(e))



//Promise.reject
function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.reject('Pagina em cache');
    } else {
        return wait('Baixei a pagina', 3000)
    }
}

baixaPagina()
.then(dadosPagina =>{
    console.log(dadosPagina);
})
.catch(e => console.log('ERRO', e))

