let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorTotal = 0;
let mediaAritmetica;
for (let index = 0; index < numbers.length; index += 1) {
  valorTotal += numbers[index];  
}

mediaAritmetica = valorTotal / numbers.length;

console.log('A média aritmética dos elementos do array é: ' + mediaAritmetica)