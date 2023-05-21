let input;
const numbers = [];
let total = 0;

while (input) {
  if (!isNaN(input)) {
    numbers.push(input);
    input = Number(prompt('Введіть число ще раз'))
  } else if (!isNaN(input)) {
    break;
  } else if (input === null) {
    break;
  }
}
console.log(numbers)

const addNumbers = function () {
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
        console.log(total)
    }
    return total
}

console.log(total);