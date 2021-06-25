let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

//soma os valores do array numbers e coloca na variavel resultado
for (let index = 0; index < numbers.length; index += 1) {
  resultado += numbers[index];
}

if ((resultado / numbers.length) > 20){
  console.log("Valor maior que 20.");
}else{
  console.log("Valor menor ou igual a 20.");
}

