exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    var args = arr;
    console.log(arr)
    console.log(fn.apply(this, args))
    return fn.apply(this, args)


  },

  speak: function(fn, obj) {
      var passedObj = obj
      console.log(passedObj)
      return fn.call(passedObj)

  },

  functionFunction: function(str) {

  },

  makeClosures: function(arr, fn) {

  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
