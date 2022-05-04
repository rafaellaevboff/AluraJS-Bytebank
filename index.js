import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./contas/ContaCorrente.js"
import { ContaPoupanca } from "./contas/ContaPoupanca.js";

//criando clientes
const cliente1 = new Cliente("Ricardo", 12345678909);

//criando contas
const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupancaRicardo = new ContaPoupanca(50, cliente1, 1001);
contaPoupancaRicardo.sacar(10);

console.log("Número de contas correntes:" + ContaCorrente.numeroDeContas);

console.log(contaCorrenteRicardo);
console.log(contaPoupancaRicardo);