exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    var index = [];
    for (i = arr.length; i > 0; i--){
      if (arr[i-1] == item){
        index.push(i-1);
       }
     };
     for (x = 0; x < index.length; x++) {
       arr.splice(index[x], 1);
     }
     return arr;
    // return _.without(arr, item);
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop(arr);
    return arr;

  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift(arr);
    return arr;
  },

  concat : function(arr1, arr2) {
    arr3 = arr1.concat(arr2);
    return arr3;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    arr.sort()
    var counted = 0;
    for (var i = 0; i < arr.length; i++)
      if (arr[i] == item)
        counted += 1;
    return counted;
    // var arrCount = _.filter(arr, function(num) {return num == item});
    // return arrCount.length;
  },

  duplicates : function(arr) {
    arr.sort()
    dupArray = {};
    newArray = []
    for (var i = 0; i < arr.length; i++){
      dupArray[i] = 0
    }
    for (var i = 0; i < arr.length; i++) {
        dupArray[arr[i]] += 1
    }
    for (i in dupArray) {
      if (dupArray[i] > 1) {
        newArray.push(Number(i))
      }
    }
    return newArray;
  },

  square : function(arr) {
    sqNumbers = []
    for (var i = 0; i < arr.length; i++) {
      sqNumbers.push(Math.pow(arr[i],2));
    }
    return sqNumbers;
  },

  findAllOccurrences : function(arr, target) {
    var occurNumbers = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurNumbers.push(i);
      }
    }
    return occurNumbers;

  }
};
