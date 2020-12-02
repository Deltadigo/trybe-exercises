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

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

/* function maiorNome(nomes) {
  let qtdeCaracteres = 0;
  let maiorNome = '';

  for (let index = 0; index < nomes.length; index += 1){
    if (nomes[index === 0]) {
      qtdeCaracteres = nomes[index].length;
    } else {
      if (nomes[index].length > qtdeCaracteres) {
        qtdeCaracteres = nomes[index].length;
        maiorNome = nomes[index];
      }
    }
  }

  return maiorNome;
}

const nomeMaisCaracteres = maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
console.log(nomeMaisCaracteres); */

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

/* function maisRepetido(inteiros) {
  let numeros = [];

  for (let index = 0; index < inteiros.length; index += 1) {

    const objeto = {
      qtdeRepeticoes: 0,
      numero: 0
    };

    for (let index2 = 0; index2 < inteiros.length; index2 += 1) {
      if (inteiros[index] === inteiros[index2]) {
        objeto.qtdeRepeticoes = objeto.qtdeRepeticoes + 1;
        objeto.numero = inteiros[index];
      }
    }

    numeros.push(objeto);

  }
  
  let maiorRepeticao = 0;
  let numero = 0;

  for (let index = 0; index < numeros.length; index += 1) {
    if (index === 0) {
      maiorRepeticao = numeros[index].qtdeRepeticoes;
      numero = numeros[index].numero;
    } else {
      if (numeros[index].qtdeRepeticoes > numeros[index - 1].qtdeRepeticoes){
        maiorRepeticao = numeros[index].qtdeRepeticoes;
        numero = numeros[index].numero;
      }
    }
  }
  return numero;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); */

// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function somarNumeros(numeroMaximo) {
  let soma = 0;
  for (let index = 1; index <= numeroMaximo; index += 1) {
    soma += index;
  }
  return soma;
}

const valorTotal = somarNumeros(5);
console.log(valorTotal)