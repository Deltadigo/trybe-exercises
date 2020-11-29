let numbers = [5, 9, 0, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (index <= 0 ) {
    menorNumero = numbers[index];
  } else if (numbers[index] < menorNumero) {
    menorNumero = numbers[index];
  }
}

console.log(menorNumero);