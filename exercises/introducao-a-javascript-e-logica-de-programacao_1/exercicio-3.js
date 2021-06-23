let a = 11;
let b = 12;
let c = 13;

if (a > b && a > c) {
  console.log("a é o maior");
} else if (b > a && b > c) {
  console.log("b é o maior");
} else if (c > a && c > b) {
  console.log("c é o maior");
} else if (a === b && b === c && a === c){
  console.log("os três são iguais");
}else{
  console.log("pelo menos dois numeros dão iguais");
}