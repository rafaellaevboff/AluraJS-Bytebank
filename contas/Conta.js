import {Cliente} from "../Cliente.js"

//CLASSE ABSTRATA (não pode ser instanciada, mad pode para ser herdada)

export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deve instanciar um objeto do tipo Conta diretamente, pois ela é uma classe abstrata");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    get cliente(){
        return this._cliente;
    }
    get saldo(){
        return this._saldo;
    }

    //métodos:
    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    //Método abstrato (não é feito para ser chamado diretamente, é para ser sobreescrito)
    sacar(valor){
        throw new Error("O método Sacar da conta é abstrato");
    }

    //privado:
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }  
}