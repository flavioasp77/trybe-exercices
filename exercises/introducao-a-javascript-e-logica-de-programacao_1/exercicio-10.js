let valorCusto = 155;
let valorVenda = 200;
let impostoSobreOCusto = valorCusto * (20 / 100);
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;

if (valorCusto < 0 || valorVenda < 0) {
  console.log("Erro - encerar!!!");
} else {
  console.log("o lucro é de " + (lucro * 1000));
}