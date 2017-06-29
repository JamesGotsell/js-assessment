exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {


      return fn.apply(obj)

  },

  alterObjects: function(constructor, greeting) {
     return constructor.bind(greeting)
  },

  iterate: function(obj) {

  }
};
