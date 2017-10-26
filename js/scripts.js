var removePunc = function(input) {
  var punc = ";:.,?!-'(){}";
  var array = punc.split("");
  for (i = 0; i < array.length; i++) {
    if (input[i]=== array[i]){
    input = input.replace(array[i], "");
  } else {
    return input;
  }
  }
}



// var toEncrypt = function(input){
//   var punc = ";:.,?!-'\"(){}";
//   for (var i = 0; i < input.length; i++) {
//     if (i === punc) {
//
//     }
//   }
//
// }




// Front End
$(document).ready(function() {
  $("form#crypto-input").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#original-message").val();
    var lowerCaseInput = userInput.toLowerCase();
    var lcSplit = lowerCaseInput.split("");
    var lcNoPunc = removePunc(lcSplit);
    // var encryptedMessage = toEncrypt(lowerCaseInput);
    $("#result").append("<li>" + lcNoPunc + "</li>");

  });
});
