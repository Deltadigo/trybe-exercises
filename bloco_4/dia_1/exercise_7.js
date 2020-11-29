let nota = 49;

if (nota >= 90 && nota <= 100) {
  console.log('Sua nota é A')
} else if (nota >= 80 && nota <= 100) {
  console.log('Sua nota é B')
} else if (nota >= 70 && nota <= 100) {
  console.log('Sua nota é C')
} else if (nota >= 60 && nota <= 100) {
  console.log('Sua nota é D')
} else if (nota >= 50 && nota <= 100) {
  console.log('Sua nota é E')
} else if (nota < 50 && nota >= 0) {
  console.log('Sua nota é F')
} else {
  console.log('Erro: Nota inválida');
  return;
}