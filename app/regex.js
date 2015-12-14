exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var foundNo = str.search(/\d/);
    if (foundNo == -1) {
      return false;
    } else {
      return true;
    }
  },
  // or !!! return /\d/.test(str)

  containsRepeatingLetter : function(str) {
    var checkRepLet = str.search(/([a-zA-Z])\1+/);
    if (checkRepLet == -1) {
      return false;
    } else {
      return true;
    }
  },
  //  or !!! return /[a-zA-Z])\1+/.test(str)

  endsWithVowel : function(str) {
    return /[aeiouAEIOU]/.test(str[str.length-1]);
  },

  captureThreeNumbers : function(str) {
    var captureNo = str.match(/[0-9]{3}/);
    if (captureNo != null) {
      return captureNo[0]
    }
    else {
      return false;
    }
  },

  matchesPattern : function(str) {
    return /^[0-9]{3}\D[0-9]{3}\D[0-9]{4}$/.test(str);
  },

  isUSD : function(str) {
    return /^\$\d{1,3}(\,\d{3})*(\.\d{2})?$/.test(str);

  }
};
