// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

/* function verificaPalindromo(nome) {
  const nomeReverso = nome.split('').reverse().join('');
  if (nome === nomeReverso) {
    console.log('O nome é um palíndromo');
    return true;
  } else {
    console.log('O nome não é um palíndromo');
    return false;
  }
}

verificaPalindromo('arara'); */

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

/* function maiorInteiro(listaNumerosInteiros) {
  let maiorNumero = 0;
  let maiorIndice = 0;
  for (let indice in listaNumerosInteiros) {
    if (indice === 0) {
      maiorNumero = listaNumerosInteiros[indice];
    } else {
      if (listaNumerosInteiros[indice] > maiorNumero) {
        maiorNumero = listaNumerosInteiros[indice];
        maiorIndice = indice;
      }
    }
  }
  return maiorIndice;
}

const maiorIndice = maiorInteiro([2, 3, 6, 7, 10, 1]);
console.log(maiorIndice); */

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

/* function menorInteiro(inteiros) {
  let menorNumero = 0;
  let menorIndice = 0;

  for (let index = 0; index < inteiros.length; index += 1) {
    if ( index === 0 ) {
      menorNumero = inteiros[index];
    } else {
      if ( inteiros[index] < menorNumero ) {
        menorNumero = inteiros[index];
        menorIndice = index;
      }
    }
  }

  return menorIndice;
}

const menorIndice = menorInteiro([2, 4, 6, 7, 10, 0, -3]);
console.log(menorIndice); */