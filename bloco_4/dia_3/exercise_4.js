
let espaco = ' ';
let asterisco = '*';
let n = 5;

for (let indexLinha = 0; indexLinha < n; indexLinha += 2) {
  let linha = '';
  let numAsteriscos = 1 + indexLinha;
  let numEspacosEsquerda = (n - numAsteriscos) / 2;
  let numEspacosDireita = (n - numAsteriscos) / 2;

  for (let indexColuna = 0; indexColuna < n; indexColuna += 1) {
    if (indexColuna < numEspacosEsquerda) {
      linha += espaco;
    } else if (
      indexColuna >= numEspacosEsquerda &&
      indexColuna < n - numEspacosDireita
    ) {
      linha += asterisco;
    } else {
      linha += espaco;
    }
  }
  console.log(linha);
}