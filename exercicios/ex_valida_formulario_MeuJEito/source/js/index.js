import { ValidaCPF } from "./validadores/validaCPF";
import { ValidaSenha } from "./validadores/validaSenha";
import { ValidaUsuario } from "./validadores/validaUsuario";

class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.form');
        this.res = document.querySelector('.res'); // Adicionei a variável res
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const valores = this.capturaValue(this.formulario);
        this.verificaDadosVazios(valores, this.res);
        this.verificaDados(valores, this.res);
    }

    capturaValue(formulario) {
        const usuario = formulario.querySelector('.usuario').value;
        const cpf = formulario.querySelector('.cpf').value;
        const senha = formulario.querySelector('.senha').value;
        return { usuario, cpf, senha };
    }

    verificaDadosVazios(valores, res) {
        const { usuario, cpf, senha } = valores;

        if (usuario === '' || cpf === '' || senha === '') {
            res.innerHTML = '<p>Os campos estão vazios!</p>';
            return;
        }
    }

    verificaDados(valores, res) {
        const { cpf, senha, usuario } = valores;

        const cpfValidator = new ValidaCPF(cpf);
        const senhaValidator = new ValidaSenha(senha);
        const usuarioValidator = new ValidaUsuario(usuario);

        if (!cpfValidator.valida()) {
            res.innerHTML = '<p>CPF INVÁLIDO!</p>';
            return;
        }

        if (!senhaValidator.valida()) {
            res.innerHTML = '<p>SENHA INVÁLIDA!</p>';
            return;
        }

        if (!usuarioValidator.valida()) {
            res.innerHTML = '<p>USUÁRIO INVÁLIDO!</p>';
            return;
        }

        res.innerHTML = '<p>Dados Validados!</p>';
    }
}

const valida = new ValidaFormulario();
