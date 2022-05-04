export class Cliente{
    //atributos:
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
    //essa estrutura fará com que o cpf não possa ser alterado depois de ter sido criado
}