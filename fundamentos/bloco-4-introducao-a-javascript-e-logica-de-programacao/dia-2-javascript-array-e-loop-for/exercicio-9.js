let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 3, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
let divisao = 0;

for (let index = 0; index < 25; index += 1) {
  divisao = numbers[index] / 2;
  console.log("A divisão de ",numbers[index], " por 2 é ", divisao);
}