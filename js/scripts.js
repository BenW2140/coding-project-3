$(document).ready(function() {
  $("form#list").submit(function(event) {
    event.preventDefault();

    const number = $("input#number").val();
    const replacedNumbers = mrRogersReplacer(number);

    $("#output").text(replacedNumbers);
  });
});