const readline = require('readline-sync');
const imc = require('./imc');

const readName = () => {
  const name = readline.question('Digite seu nome: ');
  return name;
};

const readWeigth = () => {
  const weigth = readline.questionFloat('Digite seu peso: ');
  return weigth;
};

const readHeight = () => {
  const height = readline.questionFloat('Digite sua altura: ');
  return height;
};

const imcCalc = imc(readHeight(), readWeigth());

console.log(`Olá ${readName()}! Seu IMC é: ${imcCalc}`);