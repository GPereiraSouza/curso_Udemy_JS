function mostraHora(){
    let date = new Date();

    return date.toLocaleDateString('pt-BR',{
        hour12: false
    });
}

const timer = setInterval(() => {console.log(mostraHora()); }, 1000);

const stopTimer = setTimeout(() => {clearInterval(timer); }, 5000);