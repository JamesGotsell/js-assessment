exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
      var removeChars = new RegExp("(.)(?=\\1{" + amount + "})","g");
      return str.replace(removeChars , "");
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
     var string = str;
     var splitString = string.split('');
     var reverseString = splitString.reverse();
     var joinString = reverseString.join('')
     return joinString
  }
};
