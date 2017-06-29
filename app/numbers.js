exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
      console.log(num , bit)

      function returnBitNum(num){
        return num.toString(2)
      }
      console.log(returnBitNum(bit))
  },

  base10: function(str) {

  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {

  }
};
