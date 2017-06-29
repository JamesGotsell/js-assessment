exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    var sayIt = function(name, greeting ) {
        this.name = name;
        this.greeting = greeting;

        return this.name + this.greeting
    };

    sayIt(str1, str2);
  }
};
