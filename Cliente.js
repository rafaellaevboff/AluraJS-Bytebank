export class Cliente{
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;

        this._senha = senha;
    }
    //essa estrutura fará com que o cpf não possa ser alterado depois de ter sido criado

    autenticar(senha){
        return true;
    }
}