let array = [];

for (let index = 0; index < 25; index += 1) {
  array[index] = index + 1;
}

for (let index = 0; index < array.length; index += 1) {
  let divisao = array[index] / 2;
  console.log(divisao);
}