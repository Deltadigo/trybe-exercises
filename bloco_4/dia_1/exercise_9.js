let numeroA = 2;
let numeroB = 18;
let numeroC = 21;

if (numeroA % 2 !== 0 || numeroB % 2 !== 0 || numeroC % 2 !== 0) {
  console.log('Existe um número ímpar. TRUE');
  return true;
} else {
  console.log('Não existe um número ímpar. FALSE');
  return false;
}