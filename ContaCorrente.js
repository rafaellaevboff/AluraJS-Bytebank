import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _saldo = 0;
    _cliente;
    //quando colocar nos atributoa _ antes significa que é privado, ou seja, não mexer com ele fora da classe, apesar de ser possível alterar

    //get: leitura
    //set: atribuição
    //atribui algo válido no campo cliente:
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
        //o instanceof verifica se a variável é a instância do objeto colocado para verificação
    }
    get cliente(){
        return this._cliente;
    }

    //retornar valor do saldo
    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }


    //métodos:
    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    transferir(valor, conta){
        conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }  
}