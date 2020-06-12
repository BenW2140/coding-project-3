const mrRogersReplacer = function (number) {
  const numbers = [];
  for (let i = 0; i <= number; i++) {
    numbers.push(i);
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