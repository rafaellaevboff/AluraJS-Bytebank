export class Funcionario{
    constructor(nome, salario, cpf){
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this.bonificacao = 1;
        this._senha;
    }

    get senha(){
        return this._senha;
    }

    autenticar(senha){
        //não expõe a propriedade
        return senha == this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }
}