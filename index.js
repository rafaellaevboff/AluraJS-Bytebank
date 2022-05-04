import {Cliente} from "./Cliente.js"
import { Conta } from "./contas/Conta.js";
import {ContaCorrente} from "./contas/ContaCorrente.js"
import { ContaPoupanca } from "./contas/ContaPoupanca.js";

//criando clientes
const cliente1 = new Cliente("Ricardo", 12345678909);

//criando contas
const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaPoupancaRicardo = new ContaPoupanca(50, cliente1, 1001);
const contaContaRicardo = new Conta(0, cliente1, 1001);

// console.log(contaCorrenteRicardo);
// console.log(contaPoupancaRicardo);
//console.log(contaContaRicardo);