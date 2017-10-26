var toEncrypt = function(input){
  var stringLength = input.length
  var columns = Math.ceil(Math.sqrt(stringLength));
  var rows = Math.round(Math.sqrt(stringLength));
  var square = (columns * rows);
  alert("columns" + columns);
  alert("rows" + rows);
}

// Front End
$(document).ready(function() {
  $("form#crypto-input").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#original-message").val();
    var re = /[\W_]/g;
    var lowerCaseInput = userInput.toLowerCase().replace(re, '');
    var lcSplit = lowerCaseInput.split("");
    var encryptedMessage = toEncrypt(lcSplit);
    // $("#result").append("<li>" + lcSplit + "</li>");

  });
});
