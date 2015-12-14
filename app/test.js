var indexA = 5;
var string = 'abcdef abcde';
var stringOne = 'abc abs';
var stringTwo = 'a b c def';

function outputStrings(str, cols) {
  var output = '';
  var array = str.split(' ');
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    if (i !== array.length -1 ) {
      if(array[i].length + array[i+1].length + counter < cols) {
        counter += array[i].length;
        output += array[i] + " ";
      } else {
        output += array[i] + "\n";
        counter = 0;
      }

    } else {
      output += array[i];
    }
  }
  return output;
}
console.log(outputStrings(string, 5));
console.log(outputStrings(stringOne, 5));
console.log(outputStrings(stringTwo, 5));

// var outputStrings = [
//   'abcdef\nabcde\nabc\ndef',
//   'abc\nabc\nabc',
//   'a b c\ndef'
// ];
