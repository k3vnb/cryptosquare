var toEncrypt = function(input){
  var encryptedMessage = "";
  var stringLength = input.length
  var columns = Math.ceil(Math.sqrt(stringLength));
  var rows = Math.round(Math.sqrt(stringLength));
  var square = (columns * rows);
  // alert("columns" + columns);
  // alert("rows" + rows);


  // for (var i = 0; i < input.length; i++){
    // while
    if (input.length >= columns) {
      var rowA = input.slice(0, columns);
      var rowB = input.splice(columns, columns);
      var rowC = input.splice(columns, columns);
      var rowD = input.splice(columns, columns);
      var rowE = input.splice(columns, columns);
      var rowF = input.splice(columns, columns);
      var rowG = input.splice(columns, columns);
      var rowH = input.splice(columns, columns);
      console.log(rowA);
      console.log(rowB);
      console.log(rowC);
      console.log(rowD);
      console.log(rowE);
      console.log(rowF);
      console.log(rowG);
      console.log(rowH);
      var masterRow = [[rowA], [rowB], [rowC], [rowD], [rowE], [rowF], [rowG], [rowH]]
      // encryptedMessage += input[i];
      // input -= columns[i];
    } console.log((rowA[0]).concat(rowB[0]).concat(rowC[0]).concat(rowD[0]).concat(rowE[0]));
    console.log((rowF[0]).concat(rowG[0]).concat(rowH[0]).concat(rowA[1]).concat(rowB[1]));
    console.log((rowC[1]).concat(rowD[1]).concat(rowE[1]).concat(rowF[1]).concat(rowG[1]));
  }
// }

// Front End
$(document).ready(function() {
  $("form#crypto-input").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#original-message").val();
    var re = /[\W_]/g;
    var lowerCaseInput = userInput.toLowerCase().replace(re, '');
    var lcSplit = lowerCaseInput.split("");
    var encryptedMessage = toEncrypt(lcSplit);
    $("#result").append("<li>" + encryptedMessage + "</li>");

  });
});
