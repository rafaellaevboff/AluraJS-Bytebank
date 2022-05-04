import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./contas/ContaCorrente.js"
import { ContaPoupanca } from "./contas/ContaPoupanca.js";

//criando clientes
const cliente1 = new Cliente("Ricardo", 12345678909);

//criando contas
const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
//null(colocado como vazio) != undefined(esqueceu de atribui algo/não atribui nada)

const contaPoupancaRicardo = new ContaPoupanca(50, cliente1, 1001);

console.log("Número de contas:" + ContaCorrente.numeroDeContas);

console.log("\nCONTAS APÓS CRIAÇÃO:");
console.log(contaCorrenteRicardo);
console.log(contaPoupancaRicardo);