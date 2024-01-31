function rand(min = 1000, max = 3000){
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function f1(callback){
    setTimeout(function () {  
        console.log('f1');
        if(callback) callback();
    }, rand());
}
function f2(callback){
    setTimeout(function () {  
        console.log('f2');
        if(callback) callback();
    }, rand());
}
function f3(callback){
    setTimeout(function () {  
        console.log('f3');
        if(callback) callback();
    }, rand());
}

// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log('Ola, Mundo!');
//         });
//     });
// });

f1(f1callback);

function f1callback(){
    f2(f2callback);
}

function f2callback(){
    f3(f3callback);
}

function f3callback(){
    console.log('Ola, mundo!');
}
