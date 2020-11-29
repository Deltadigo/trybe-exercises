let a = 15;
let b = 10;
let c = 15;

if (a > b && a > c) {
  console.log('A é maior que B e C. O valor de A é: ' + a)
} else if (a == b && a == c) {
  console.log('A é igual a B e C')
} else if (b > a && b > c) {
  console.log('B é maior que A e C. O valor de B é: ' + b)
} else if (c > a && c > b) {
  console.log('C é maior que A e B. O valor de C é: ' + c)
} else {
  console.log('Não existe um número que seja maior que os outros dois')
}