function indiceDoMaiorNumero(array) {
  let maiorNumero = 0;
  let indice;
  for (let index = 0; index < array.length; index += 1) {
    
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
    if (array[index] == maiorNumero) {
      indice = index;
    }
  }
  return console.log(indice);
}
let numeros = [2, 3, 6, 7, 10, 1,];
indiceDoMaiorNumero(numeros);