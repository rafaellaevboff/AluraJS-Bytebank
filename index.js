import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//criando clientes
const cliente1 = new Cliente("Ricardo", 12345678909);
const cliente2 = new Cliente("Alice", 16598709856);

//criando contas
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const contaCorrenteAlice = new ContaCorrente(3021, cliente2);
//null(colocado como vazio) != undefined(esqueceu de atribui algo/não atribui nada)

console.log("Número de contas:" + ContaCorrente.numeroDeContas);

console.log("\nCONTAS APÓS CRIAÇÃO:");
console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);

//MOVIMENTAÇÕES
//depositar
contaCorrenteRicardo.depositar(300);
contaCorrenteAlice.depositar(300);
console.log("\nCONTAS APÓS DEPOSITOS:");
console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);

//sacar
contaCorrenteRicardo.sacar(50);
contaCorrenteAlice.sacar(20);
console.log("\nCONTAS APÓS SAQUES:");
console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);

//transferir
let valor = 200;
contaCorrenteRicardo.transferir(valor, contaCorrenteAlice);
console.log("\nCONTAS APÓS TRANSFERÊNCIA:");
console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);