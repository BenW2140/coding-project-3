const mrRogersReplacer = function (num, name, reverse) {
  const numbers = [];
  if (num < 0) {
    return "Please enter a positive number";
  }
  for (let i = 0; i <= num; i++) {
    numbers.push(' ' + i + '');
    if (numbers[i].includes('3')) {
      numbers[i] = numbers[i].replace(numbers[i], " Won't you be my neighbor, " + name + "?");
    } else if (numbers[i].includes('2')) {
      numbers[i] = numbers[i].replace(numbers[i], ' Boop!');
    } else if (numbers[i].includes('1')) {
      numbers[i] = numbers[i].replace(numbers[i], ' Beep!');
    }
  }
  if (reverse === 'yes') {
    numbers.reverse();
  }
  return numbers;
}

$(document).ready(function() {
  $("form#list").submit(function(event) {
    event.preventDefault();

    const number = $("input#number").val();
    const userName = $("input#name").val();
    const answer = $("input:radio[name=question]:checked").val();
    const replacedNumbers = mrRogersReplacer(number, userName, answer);

    $("#output").text(replacedNumbers);
    $("#output").show();
  });
});