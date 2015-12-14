exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var array = str.split('');
    var list = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i] != list[list.length-1] ){
        list.push(array[i]);
      } else if (array[i] != list[list.length-amount]) {
        list.push(array[i]);
      }
    }
    return list.join('');
  },
  wordWrap: function(str, cols) {
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

  },
  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
