// Método 1

let numeroA = 3;
let numeroB = 15;
let numeroC = 20;

if (numeroA % 2 == 0 || numeroB % 2 == 0 || numeroC % 2 == 0) {
  console.log('Existe um número par. TRUE');
  return true;
} else {
  console.log('Não existe um número par. FALSE');
  return false;
}

/* // Método 2

let numeros = [3, 15, 20];

for (let index = 0; index < numeros.length; index += 1) {
  if (numeros[index] % 2 == 0) {
    console.log('Existe um número par. TRUE');
    return true;
  }
}

console.log('Não existe um número par. FALSE')
return false; */