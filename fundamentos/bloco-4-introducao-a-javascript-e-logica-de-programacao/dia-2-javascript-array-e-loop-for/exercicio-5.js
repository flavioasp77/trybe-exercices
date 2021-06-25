let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

//soma os valores do array numbers e coloca na variavel resultado
for (let index = 0; index < numbers.length; index += 1) {
  resultado += numbers[index];
}
//apresenta a media aritmética dos valores do array numbers
console.log(resultado / numbers.length);