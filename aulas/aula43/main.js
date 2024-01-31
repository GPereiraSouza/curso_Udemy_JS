//Function factory -> factory objects
//Function Construction -> Construction objects
// Consttruction -> U need every time use Caps in the first letter. Pessoa(new);

// function Pessoa(nome, sobrenome){
//     const ID = 123456;
//     this.nome = nome;
//     this.sobrenome = sobrenome;

//     const metodoInterno = () =>{
        
//     }

//     this.metodo = () => {
//         console.log(this.nome + ': sou um metodo');
//     };
// }

// const p1 = new Pessoa('Guilherme', 'Souza');
// const p2 = new Pessoa('Maria', 'Pereira');


// p1.metodo();

class Calculadora {
    constructor() {
        this.display = document.querySelector('.display');

        this.inicia = () => {
            this.cliqueBtn();
            this.pressionaEnter();
        };

        this.pressionaEnter = () => {
            document.addEventListener('keyup', e => {
                if (e.key === 'Enter') {
                    this.realizaConta();
                }
            });
        };

        this.clearDisplay = () => {
            this.display.value = '';
        };

        this.apagaUM = () => {
            this.display.value = this.display.value.slice(0, -1);
        };

        this.realizaConta = () => {
            try {
                const conta =  eval(this.display.value);
                if (!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = conta;
            } catch (e) {
                alert('Conta Inválida');
                return;
            }
        };

        this.cliqueBtn = () => {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                };
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                };
                if (el.classList.contains('btn-del')) {
                    this.apagaUM();
                };
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        };

        this.btnParaDisplay = (valor) => {
            this.display.value += valor;
            this.display.focus();
        };
    }
}


const calculadora =  new Calculadora();


calculadora.inicia();