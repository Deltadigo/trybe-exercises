let valorCusto = 80;
let valorVenda = 150;
let valorImposto = 0.20;
let valorLucro = 0;

if (valorCusto < 0 || valorVenda < 0) {
  console.log('Erro: Valores inválidos')
} else {
  valorCusto += (valorCusto * valorImposto);
  valorLucro = valorVenda - valorCusto; 
  console.log('O lucro total na venda de 1000 unidades desse produto é: ' + (valorLucro * 1000))
}

// console.log(valorCusto);
// console.log(valorLucro)