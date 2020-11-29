let pecaXadrez = 'Rei';
pecaXadrez = pecaXadrez.toLowerCase()
console.log(pecaXadrez)
if (pecaXadrez === 'peao') {
  console.log('Peão -> Vertical')
} else if (pecaXadrez === 'bispo') {
  console.log('Bispo -> Diagonal')
} else if (pecaXadrez === 'cavalo') {
  console.log('Cavalo -> Em L') 
} else if (pecaXadrez === 'torre') {
  console.log('Torre -> Vertical e Horizontal')
} else if (pecaXadrez === 'rainha') {
  console.log('Rainha -> Vertifical, Horizontal e Diagonal')
} else if (pecaXadrez === 'rei') {
  console.log('Rei -> Vertical, Horizontal e Diagonal')
} else {
  console.log('Erro: Peça inválida')
}