//função para verificar se uma palavra é palíndromo
function palindromo(palavra) {
  let aux = "";
  for (let index = palavra.length - 1; index >= 0; index -= 1) {
    aux += palavra[index];
    }
    if( palavra === aux){
      return console.log(true);
    }else{
      return console.log(false);
    }
  }
palindromo("ovo");