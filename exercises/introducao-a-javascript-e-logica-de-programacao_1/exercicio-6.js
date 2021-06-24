let peça = "Bispo";

switch (peça.toUpperCase()) {
  case "PEÃO":
    console.log("O peão se movimenta somente para frente, uma ou duas casas no seu lance inicial e depois apenas uma.");
    break;
  case "CAVALO":
    console.log("o cavalo se movimenta formando um 'L', sendo dua casas em uma direção e uma casa para o lado.");
    break;
  case "BISPO":
    console.log("o bispo se movimenta na diagonal quantas casas quiser e também pode voltar.");
    break;
  case "TORRE":
    console.log("A torre se movimenta na hrizontal ou na vertical quantas casas quiser e também pode voltar.");
    break;
  case "RAINHA":
    console.log("A rainha se movimenta igual ao bispo e a torre.")
    break;
  case "DAMA":
    console.log("A dama se movimenta igual ao bispo e a torre.")
    break;
  case "REI":
    console.log("O rei movimenta igual a rainha ou dama, porém uma casa de cada vez.")
    break;
  default:
    console.log("Nome de peça inválido!");
}