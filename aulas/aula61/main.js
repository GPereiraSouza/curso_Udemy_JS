//Principal class
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo <= valor) {
        
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag/C: ${this.agencia}/${this.conta}`);
    console.log(`Saldo: ${this.saldo}`);
};


const p1 = new Conta(12345, 321, 1500);

p1.verSaldo();
p1.sacar(500);
p1.depositar(1000);
p1.verSaldo();
