let salarioBruto = 3500;
let salarioLiquido = 0;
let aliquotaInss = 0;
let aliquotaIr = 0;
let valorInss = 0;
let valorIr = 0;
let salarioDeduzidoInss = 0;
let parcelaIr = 0;

// Cálculo do INSS

if ( salarioBruto >= 0 && salarioBruto <= 1556.94) {
  aliquotaInss = 0.08;
  valorInss = salarioBruto * aliquotaInss;
  salarioDeduzidoInss = salarioBruto - valorInss;
} else if ( salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  aliquotaInss = 0.09;
  valorInss = salarioBruto * aliquotaInss;
  salarioDeduzidoInss = salarioBruto - valorInss;
} else if ( salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  aliquotaInss = 0.11;
  valorInss = salarioBruto * aliquotaInss;
  salarioDeduzidoInss = salarioBruto - valorInss;
} else if ( salarioBruto > 5189.82 ) {
  aliquotaInss = 570.88;
  salarioDeduzidoInss = salarioBruto - aliquotaInss;
} else {
  console.log('Erro: Valor inválido');
}

// Cálculo do IR

if ( salarioDeduzidoInss >= 0 && salarioDeduzidoInss <= 1903.98) {
  console.log('Salário bruto: ' + 'R$ ' + salarioBruto);
  console.log('Aliquota do Inss: ' + aliquotaInss * 100 + '%');
  console.log('Valor do Inss: ' + 'R$ ' + valorInss);
  console.log('Salário base: ' + 'R$ ' + salarioDeduzidoInss)
  console.log('Salário isento de imposto de renda')
  console.log('Salário líquido: ' + 'R$ ' + salarioDeduzidoInss)
} else if ( salarioDeduzidoInss > 1903.98 && salarioDeduzidoInss <= 2826.65 ) {
  aliquotaIr = 7.5;
  parcelaIr = 142.80;
  valorIr = ((salarioDeduzidoInss * aliquotaIr) / 100) - parcelaIr;
  valorIr = valorIr.toFixed(2);
  salarioLiquido = salarioDeduzidoInss - valorIr;
  console.log('Salário bruto: ' + 'R$ ' + salarioBruto);
  console.log('Aliquota do Inss: ' + aliquotaInss * 100 + '%');
  console.log('Valor do Inss: ' + 'R$ ' + valorInss);
  console.log('Salário base: ' + 'R$ ' + salarioDeduzidoInss)
  console.log('Aliquota do IR: ' + aliquotaIr + '%')
  console.log('Parcela do IR: ' + 'R$ ' + parcelaIr)
  console.log('Valor do IR: ' + 'R$ ' + valorIr)
  console.log('Salário líquido: ' + 'R$ ' + salarioLiquido)
} else if ( salarioDeduzidoInss > 2826.65 && salarioDeduzidoInss <= 3751.05 ) {
  aliquotaIr = 15;
  parcelaIr = 354.80;
  valorIr = ((salarioDeduzidoInss * aliquotaIr) / 100) - parcelaIr;
  valorIr = valorIr.toFixed(2);
  salarioLiquido = salarioDeduzidoInss - valorIr;
  console.log('Salário bruto: ' + 'R$ ' + salarioBruto);
  console.log('Aliquota do Inss: ' + aliquotaInss * 100 + '%');
  console.log('Valor do Inss: ' + 'R$ ' + valorInss);
  console.log('Salário base: ' + 'R$ ' + salarioDeduzidoInss)
  console.log('Aliquota do IR: ' + aliquotaIr + '%')
  console.log('Parcela do IR: ' + 'R$ ' + parcelaIr)
  console.log('Valor do IR: ' + 'R$ ' + valorIr)
  console.log('Salário líquido: ' + 'R$ ' + salarioLiquido)
} else if ( salarioDeduzidoInss > 3751.05 && salarioDeduzidoInss <= 4664.68 ) {
  aliquotaIr = 22.5;
  parcelaIr = 636.13;
  valorIr = ((salarioDeduzidoInss * aliquotaIr) / 100) - parcelaIr;
  valorIr = valorIr.toFixed(2);
  salarioLiquido = salarioDeduzidoInss - valorIr;
  console.log('Salário bruto: ' + 'R$ ' + salarioBruto);
  console.log('Aliquota do Inss: ' + aliquotaInss * 100 + '%');
  console.log('Valor do Inss: ' + 'R$ ' + valorInss);
  console.log('Salário base: ' + 'R$ ' + salarioDeduzidoInss)
  console.log('Aliquota do IR: ' + aliquotaIr + '%')
  console.log('Parcela do IR: ' + 'R$ ' + parcelaIr)
  console.log('Valor do IR: ' + 'R$ ' + valorIr)
  console.log('Salário líquido: ' + 'R$ ' + salarioLiquido)
} else if ( salarioDeduzidoInss > 4664.68 ) {
  aliquotaIr = 27.5;
  parcelaIr = 869.36;
  valorIr = ((salarioDeduzidoInss * aliquotaIr) / 100) - parcelaIr;
  valorIr = valorIr.toFixed(2);
  salarioLiquido = salarioDeduzidoInss - valorIr;
  console.log('Salário bruto: ' + 'R$ ' + salarioBruto);
  console.log('Aliquota do Inss: ' + aliquotaInss * 100 + '%');
  console.log('Valor do Inss: ' + 'R$ ' + valorInss);
  console.log('Salário base: ' + 'R$ ' + salarioDeduzidoInss)
  console.log('Aliquota do IR: ' + aliquotaIr + '%')
  console.log('Parcela do IR: ' + 'R$ ' + parcelaIr)
  console.log('Valor do IR: ' + 'R$ ' + valorIr)
  console.log('Salário líquido: ' + 'R$ ' + salarioLiquido)
} else {
  console.log('Erro: Valor inválido');
}

