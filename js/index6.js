let input;
const numbers = [];
let total = 0;

function calculateSum() {
  for (;;) {
    input = prompt('Введіть число:');
    
    if (input === null) {
      break;
    }
    
    const parsedInput = Number(input);
    
    if (isNaN(parsedInput)) {
      alert('Було введено не число, спробуйте ще раз.');
      continue;
    }
    
    numbers.push(parsedInput);
  }
  
  if (numbers.length > 0) {
    for (const number of numbers) {
      total += number;
    }
    
    console.log(`Загальна сума чисел дорівнює ${total}.`);
  }
}

calculateSum();

// while (input) {
//   if (!isNaN(input)) {
//     numbers.push(input);
//     input = Number(prompt('Введіть число ще раз'))
//   } else if (!isNaN(input)) {
//     break;
//   } else if (input === null) {
//     break;
//   }
// }
// console.log(numbers)

// const addNumbers = function () {
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i]
//         console.log(total)
//     }
//     return total
// }

// console.log(total);