exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    console.log(str)
      var patt = new RegExp('(\w+\d+)');
      console.log(patt.test(str));
      var result = patt.test(str);
      return result;

  },

  containsRepeatingLetter: function(str) {
    console.log(str)

      var patt = new RegExp('([a-z])\\1{3,}.*)');
      var result = patt.test(str);
      return result;

  },

  endsWithVowel: function(str) {

  },

  captureThreeNumbers: function(str) {

  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {

  }
};
