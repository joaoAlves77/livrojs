const prompt = require("prompt-sync")();

const salario = Number(prompt("Salário R$: "));
const tempo = Number(prompt("Tempo de serviço (anos): "));
const quadrienio = Math.floor(tempo / 4);
const aumento = salario * quadrienio / 100;
console.log(`Quadrienio: ${quadrienio}`);
console.log(`Salário Final: R$: ${(salario + aumento).toFixed(2)}`);
