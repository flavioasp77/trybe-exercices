//declarando as variaveis
let aliquotaInss;
let aliquotaIr;
let salarioBruto = 3000;
let salarioComDescontoInss;
let salarioLiquido;
//calculando as aliquotas do INSS
if (salarioBruto <= 1556.94) {
  aliquotaInss = salarioBruto * (8 / 100);
} else if (salarioBruto <= 2594.92) {
  aliquotaInss = salarioBruto * (9 / 100);
} else if (salarioBruto <= 5189.82) {
  aliquotaInss = salarioBruto * (11 / 100);
} else {
  aliquotaInss = 570.88
}
//atribuindo valor do salario com desconto do inss
salarioComDescontoInss = salarioBruto - aliquotaInss;
//calculando as aliquotas do IR
if (salarioComDescontoInss <= 1903.98) {
  aliquotaIr = 0;
} else if (salarioComDescontoInss <= 2826.65) {
  aliquotaIr = (salarioComDescontoInss * (7.5 / 100)) - 142.80;
} else if (salarioComDescontoInss <= 3751.05) {
  aliquotaIr = (salarioComDescontoInss * (15 / 100)) - 354.80;
} else if (salarioComDescontoInss <= 4664.68) {
  aliquotaIr = (salarioComDescontoInss * (22.5 / 100)) - 636.13;
} else if (salarioComDescontoInss > 4664.68) {
  aliquotaIr = (salarioComDescontoInss * (27.5 / 100)) - 869.36;
}
//calculando salario liquido
salarioLiquido = salarioComDescontoInss - aliquotaIr;
//exibeindo o salario
console.log("Salario líquido: ", salarioLiquido,".");