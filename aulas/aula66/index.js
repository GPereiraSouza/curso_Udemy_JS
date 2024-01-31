class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }
        
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }
        
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor){
        super(nome);

        this.cor = cor;
    }
}

class Iphone extends Smartphone{
    constructor(nome, cor, modelo){
        super(nome, cor);

        this.modelo = modelo;
    }
}

const s1 = new Iphone('Iphone', 'Preto', 'Iphone 15 PLUS');
s1.ligar();
console.log(s1);
