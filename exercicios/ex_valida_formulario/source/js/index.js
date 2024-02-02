class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.form');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.isValid();
        const senhasValidas = this.passwordIsValidas();

         if(camposValidos && senhasValidas){
             alert('Formulario enviado.');
             this.formulario.submit();
         }
    }

    isValid(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerHTML;

            if(!campo.value){
                this.creatErr(campo, `Campo "${label}" não pode estar em branco`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    passwordIsValidas(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirPassword = this.formulario.querySelector('.repetir-password');

        if(senha.value !== repetirPassword.value){
            valid = false;
            this.creatErr(senha, 'Campos senha e repetir senha precisam ser iguais.');
            this.creatErr(repetirPassword, 'Campos senha e repetir senha precisam ser iguais.');
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.creatErr(senha, 'Senha precisa ter entre 6 e 12 caracteres.');
            
        }

        return valid;
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()){
            this.creatErr(campo, 'CPF inválido.');
            return false;
        }

        return true;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12){
            this.creatErr(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
            valid = false;
        }

        if(!usuario.match(/[a-zA-Z0-9]+$/g)){
            this.creatErr(campo, 'Usuário pode conter apenas Letras e/ou Números');
            valid = false;
        }

        return valid;
    }

    creatErr(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();