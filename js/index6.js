const numbersAdd = function () {
  const numbers = [];
  let total = 0;
  let input = Number(prompt("Введіть число"));

  while (input) {
    if (!isNaN(input)) {
      numbers.push(input);
      input = Number(prompt("Введіть число"));
    } else if (isNaN(input)) {
      break;
    } else if (input === null) {
      break;
    };
  };

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  };
  console.log(numbers);
  console.log(total);
  return total;
};

numbersAdd();