let ang1 = 60;
let ang2 = 60;
let ang3 = 62;
let triangulo = ang1 + ang2 + ang3;

if (triangulo === 180) {
  console.log("É um triangulo");
} else if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
  console.log("Erro! Tem algum ângulo inválido.");
} else if (triangulo < 180) {
  console.log("É um triangulo. Soma dos ângulos menor que 180º");
} else {
  console.log("Não é um triangulo. Soma dos ângulos maior que 180º");
}