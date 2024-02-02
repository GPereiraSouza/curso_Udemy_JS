class ValidaUsuario {
    constructor(usuario) {
        this.usuario = usuario;
    };

    valida() {
        const verificaCaracteres = /^[a-zA-Z0-9]+$/;

        if (!verificaCaracteres.test(this.usuario) || this.usuario.length <= 3 || this.usuario.length >= 12) {
            return false;
        }

        return true;
    }
}

export default ValidaUsuario;
