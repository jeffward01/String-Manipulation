function convert() {
  var output = document.getElementById('inputText').value;

  if (document.getElementById("reverseCase").checked == true) {

    var output = document.getElementById('inputText').value;
    document.getElementById('outputText').value = output.split('').reverse().join('');


  } else {
    // set the text to upper or lower (or no change if no radio selected)
    document.getElementById('outputText').value = (document.getElementById("lowerCase").checked == true) ? output.toLowerCase() : (document.getElementById("upperCase").checked == true) ? output.toUpperCase() : output;
  }
}

function countit() {
  var formcontent = document.getElementById('inputText').value;
  formcontent = formcontent.match(/\S+/g);
  document.getElementById('wordcalc').value = formcontent.length;
}


function charit() {
  var myString = document.getElementById("inputText").value;
  var withoutSpace = myString.replace(/ /g, "");
  var length = withoutSpace.length;
  document.getElementById('charcalc').value = length;
}
