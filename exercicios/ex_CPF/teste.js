//705.484.450-52 / 070.987.720-03

//VERIFICAR SE O CPF È VALIDO

let cpf1 = '705.483.450-52';

function cpfToArray(cpf){
    let cpfLImpo = cpf.replace(/\D+/g,'');
    let cpfArray = Array.from(cpfLImpo, (num) => Number(num));
    return cpfArray;
}

function arrayTOCpf(array){
    array = array.toString();
    return array;
}

const cpf1Array = cpfToArray(cpf1);

function verificaPrimeiroDigito(cpfArray) {
    let soma = 0;
    let multiplicador = 10;

    for (let i = 0; i < cpfArray.length - 1; i++) {
        soma += cpfArray[i] * multiplicador;
        multiplicador--;
    }

    const resto = soma % 11;
    const digitoVerificador = (resto > 9) ? 0 : 11 - resto;

    return digitoVerificador;
}

function verificaSegundoDigito(cpfArray){
    let soma = 0;
    let multiplicador = 11;

    for (let i = 0; i < cpfArray.length; i++) {
        soma += cpfArray[i] * multiplicador;
        multiplicador--;
    }

    const resto = soma % 11;
    const digitoVerificador = (resto > 9) ? 0 : 11 - resto;

    return digitoVerificador;
}


const valorPrimeiroDigito = verificaPrimeiroDigito(cpf1Array);
const valorSegundoDigito = verificaSegundoDigito(cpf1Array);

const arrayCpfIncompleto = cpf1Array.slice(0, 9);

const arrayCpfVerificar = [...arrayCpfIncompleto, valorPrimeiroDigito, valorSegundoDigito];



// console.log(valorPrimeiroDigito);
// console.log(valorSegundoDigito);
