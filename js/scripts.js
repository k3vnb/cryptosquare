// Front End
$(document).ready(function() {
  $("form#crypto-input").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#original-message").val();
    var lowerCaseInput = userInput.toLowerCase();
    var encryptedMessage = toEncrypt(userInput);
    $("#result").append("<li>" + encryptedMessage + "</li>")

  });
});
