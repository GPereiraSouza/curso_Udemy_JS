function retornaFuncao(){
    const nome = 'GUi';

    return function(){
        return nome;
    }
}


const funcao = retornaFuncao();

console.log(funcao);