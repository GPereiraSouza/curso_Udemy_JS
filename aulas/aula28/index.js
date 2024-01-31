// OBJECT DATE;

// Date() = function cronstruction, every time when are u using cronstruction function u start the first letter in CAPS;

//const data = new Date(0); // 01/01/1970 TimeStamp Unix;
//const tresHoras = 60 * 60 * 3 * 1000; For u plus or minus hours in code, it is (seconds * seconds * hours * 1 milisecond); In this line plus 3h;
//const umDia = 60 * 60 * 24 * 1000; // 1 day in miliseconds;
//const data = new Date(2019, 3, 20, 15, 14, 27, 500); //This is how u set some time u want to set: Year, Month, Day, Hours, Minutes, Sec, milisec;
//const data = new Date('2019-04-20 20:20:59'); //Most used format to represent Date in code: Call Date(dataString);


function zeroAEquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEquerda(data.getDate());
    const mes = zeroAEquerda(data.getMonth() + 1);
    const ano = zeroAEquerda(data.getFullYear());
    const hora = zeroAEquerda(data.getHours());
    const min = zeroAEquerda(data.getMinutes());
    const seg = zeroAEquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataPt = formataData(data);
console.log(dataPt);
