// const h1 = document.querySelector('.container h1');
// const date = new Date();

// function getDayWeek(dayWeek){
//     let dayWeekText;

//     switch (dayWeek){
//         case 0: 
//             dayWeekText = 'Domingo';
//             return dayWeekText;
//         case 1:
//             dayWeekText =  'Segunda-feira';
//             return dayWeekText;
//         case 2: 
//             dayWeekText =  'Terça-feira';
//             return dayWeekText;
//         case 3: 
//             dayWeekText =  'Quarta-feira';
//             return dayWeekText;
//         case 4: 
//             dayWeekText =  'Quinta-feira';
//             return dayWeekText;
//         case 5: 
//             dayWeekText = 'Sexta-feira';
//             return dayWeekText;
//         case 6:     
//             dayWeekText = 'Sabado';
//             return dayWeekText;
//         default:
//             dayWeekText = '';
//             return dayWeekText;
//     }
// }

// function getMonth(month){
//     let monthText;

//     switch(month){
//         case 0:
//             monthText = 'janeiro';
//             return monthText;
//         case 1:
//             monthText = 'fevereiro';
//             return monthText;
//         case 2:
//             monthText = 'março';
//             return monthText;
//         case 3:
//             monthText = 'abril';
//             return monthText;
//         case 4:
//             monthText = 'maio';
//             return monthText;
//         case 5:
//             monthText = 'junho';
//             return monthText;
//         case 6:
//             monthText = 'julho';
//             return monthText;
//         case 7:
//             monthText = 'agosto';
//             return monthText;
//         case 8:
//             monthText = 'setembro';
//             return monthText;
//         case 9:
//             monthText = 'outubro';
//             return monthText;
//         case 10:
//             monthText = 'novembro';
//             return monthText;
//         case 11:
//             monthText = 'dezembro';
//             return monthText;     
//     }
// }

// function zeroLeft(num){
//     return num >= 10 ? num : `0${num}`;
// }

// function creatDate(data){
//     const numberDayWeek = data.getDay();
//     const numberMonth = data.getMonth();

//     const nameDay = getDayWeek(numberDayWeek);
//     const nameMonth = getMonth(numberMonth);

//     return `${nameDay}, ${date.getDate()} de ${nameMonth} de ${date.getFullYear()} <br> ${zeroLeft(date.getHours())}:${zeroLeft(date.getMinutes())}`
// }

// h1.innerHTML = creatDate(date);

const res = document.querySelector('#res');
const data = new Date();

res.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});

console.log(data);