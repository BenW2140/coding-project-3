const mrRogersReplacer = function (num) {
  const numbers = [];
  if (num < 0) {
    return "Please enter a positive number";
  }
  for (let i = 0; i <= num; i++) {
    numbers.push(' ' + i + '');
    // for (let j = 0; j < numbers[i].length; j++) {
    //   slicedNum = numbers[i].slice(j, j + 1);
    //   if (slicedNum.includes('1')) {
    //     numbers[i] = numbers[i].replace(numbers[i], 'Beep!');
    //   }
    // }
    if (numbers[i].includes('3')) {
      numbers[i] = numbers[i].replace(numbers[i], " Won't you be my neighbor?");
    } else if (numbers[i].includes('2')) {
      numbers[i] = numbers[i].replace(numbers[i], ' Boop!');
    } else if (numbers[i].includes('1')) {
      numbers[i] = numbers[i].replace(numbers[i], ' Beep!');
    }
  }
  return numbers;
}

$(document).ready(function() {
  $("form#list").submit(function(event) {
    event.preventDefault();

    const number = $("input#number").val();
    const replacedNumbers = mrRogersReplacer(number);

    $("#output").text(replacedNumbers);
  });
});