let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contadorImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 != 0) {
    contadorImpar += 1;
  }
}

if (contadorImpar > 0) {
  console.log('O array possui ' + contadorImpar + ' números ímpares');
} else {
  console.log('O array não possui números ímpares.');
}
