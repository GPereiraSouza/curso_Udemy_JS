
// function soma(x, y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         throw new Error('x e y nao sao numeros');
//     }

//     return x + y;
// }

// try{
//     console.log(soma(1, 2));
//     console.log(soma(1,'a'));
// }catch(err){
//     console.log(err);
// }

// try{
//     //executada quando não há erros
//     console.log('Abri um arquivo');
//     console.log('Manipulei o  arquivo e gerou erro');
//     console.log('Fechei o arquivo');
// } catch(err){
//     //executada quando há erros
//     console.log('Tratando o erro');
// } finally{
//     //sempre
//     console.log('Eu sou sempre executado');
// }

function retornaHora(date){
    if(date && !(date instanceof Date)){
        throw new TypeError('Esperando instancia de Date');
    }

    if(!date){
        date = new Date();
    }
    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try{
    const date = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(12);
    console.log(hora);
} catch(err){
    console.log(err);
} finally{
    console.log('Tenha um bom dia')
}
