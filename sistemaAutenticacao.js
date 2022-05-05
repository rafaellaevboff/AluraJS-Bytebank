/*
Ser autenticavel significa ter a propriedade "senha"

ducky type : se anda como pato, se fala como pato, se age como pato então deve ser um pato
não importa o tipo, mas sim o que consegue fazer
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){ 
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function;
        //metodo autenticar existe dentro do autenticavel? E tem uma instancia de função dentro?
    }
}