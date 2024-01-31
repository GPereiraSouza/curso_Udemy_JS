const _velociade = Symbol('velocidade');

class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velociade] = 0;
    }

    set velocidade(valor){
        if(typeof valor !== "number") return;
        if( valor >= 100 || valor <= 0) return;
        this[_velociade] = valor;
    }

    get velocidade(){
        return this[_velociade];
    }

    acelerar(){
        if(this[_velociade] >= 100) return;
        this[_velociade]++;
    }

    freiar(){
        if(this[_velociade] <= 0) return;
        this[_velociade]--;
    }
}

const c1 = new Carro('Fusca');

c1.velocidade = 10;
console.log(c1);
