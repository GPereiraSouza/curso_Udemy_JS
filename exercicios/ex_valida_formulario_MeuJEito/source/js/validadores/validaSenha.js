class ValidaSenha{
    constructor(senha){
        this.senha = senha;
    }

    valida(){
        if(this.senha.length <= 6 || this.senha.length >= 12) return false;

        return true;
    }
}

export default ValidaSenha;
