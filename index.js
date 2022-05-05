import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./sistemaAutenticacao.js"

const cliente1 = new Cliente("Ana", 10000, 12345678980);


const diretor = new Diretor("Rodrigo", 12345678980, "1234");
diretor.cadastrarSenha("senhaDiretor123");
const gerente = new Gerente("Felipe", 5000, 12341234980);
gerente.cadastrarSenha("senhaGerente123");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "senhaDiretor123");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "senhaGerente123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "1234");


console.log(diretorEstaLogado, gerenteEstaLogado);
console.log(clienteEstaLogado);