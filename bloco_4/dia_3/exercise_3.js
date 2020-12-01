let n = 5;
let asteriscos = [' ',' ',' ',' ',' '];

for (let index = n - 1; index >= 0; index -= 1) {
  asteriscos[index] = '*';
  console.log(asteriscos.join(''))
}