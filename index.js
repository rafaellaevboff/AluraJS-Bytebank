import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./contas/ContaCorrente.js"
import { ContaPoupanca } from "./contas/ContaPoupanca.js";
import { ContaSalario } from "./contas/ContaSalario.js";

//criando clientes
const cliente1 = new Cliente("Ricardo", 12345678909);

//criando contas
const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaPoupancaRicardo = new ContaPoupanca(50, cliente1, 1001);
const contaSalarioRicardo = new ContaSalario(cliente1);

contaSalarioRicardo.depositar(100);
contaSalarioRicardo.sacar(10);

// console.log(contaCorrenteRicardo);
// console.log(contaPoupancaRicardo);
console.log(contaSalarioRicardo);