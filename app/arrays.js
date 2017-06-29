exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
     var array = arr.indexOf(item);
     return array;
  },

  sum: function(arr) {
      var sum = arr.reduce(addFunc, 0);
      function addFunc( a , b ) {
        return a + b;
      }
      return sum;
  },

  remove: function(arr, item) {

  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {
      var array = arr;
      array.push(item);
      return array;
  },

  truncate: function(arr) {
      var array = arr;
      array.pop()
      return array;
  },

  prepend: function(arr, item) {
      var array = arr;
      array.unshift(item);
      return array;
  },

  curtail: function(arr) {
      var array = arr;
      array.shift()
      return array;
  },

  concat: function(arr1, arr2) {
     var concatArray = arr1.concat(arr2);
     return concatArray
  },

  insert: function(arr, item, index) {
      // Array.prototype.insert = function ( index, item ) {
      //     this.splice( index, 0, item );
      // };
      // var array = arr.insert(item, index)
      // return array;
  },

  count: function(arr, item) {
      var count = [];
      var number = item;
      var array = arr;

      for (var i = 0;  i < array.length; i++) {
            if (number === array[i]){
                count.push(array[i])
            }
      }
      var countLength =  count.length;
      return countLength
  },

  duplicates: function(arr) {
      var sorted_array = arr.sort();
      console.log(sorted_array)
      var duplicates1 = [];
      for ( var i =0 ; i < arr.length; i++){
          if(sorted_array[i +1] === sorted_array[i] ){
              duplicates1.push(sorted_array[i])
          }
      }

      console.log(duplicates);
      return duplicates
  },

  square: function(arr) {
      var powArray =[]
      for (var i =0 ; i<arr.length; i++){
        var result = Math.pow(arr[i],2 )
          powArray.push(result)
      }
       return powArray
  },

  findAllOccurrences: function(arr, target) {

  }
};
