function indiceDoMaiorNumero(array) {
  let menorNumero;
  let indice;
  for (let index = 0; index < array.length; index += 1) {
    menorNumero = array[index];
    if (array[index] < menorNumero) {
      menorNumero = array[index];
    }
    if (array[index] == menorNumero) {
      indice = index;
    }
  }
  return console.log(indice);
}
let numeros = [2, 4, 6, 7, 10, 8, 5, 20];
indiceDoMaiorNumero(numeros);