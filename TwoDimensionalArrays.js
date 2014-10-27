// SET UP AS A NODE MODULE ???
module.exports = {

  generate: function () {

    console.log(arguments.length);

    var result = [];

    // process two dimensional array
    if (arguments.length === 2) { 
        for(var j=0; j<arguments[0]; j++) {
          result.push([]);
          for(var k=0; k<arguments[1]; k++) {
            // random binary number generator produces 0 or 1
            // and populates array
            result[j][k] = Math.floor(Math.random() * 2);
          }
        }
    } else {
        result = false;
    }
    return result; // return created array
  },

  count: function (twoDimArray, boolVal) {

    // holds number of values specified boolean found in specified array
    var boolCount = 0;  // will be return value
    
    // if array exists and not empty
    if (twoDimArray.length !== 0) { // traverse 2 dim array
        for(var i=0; i<twoDimArray.length; i++) {
          for(var j=0; j<twoDimArray[i].length; j++) {
            // determine if specified boolean value is present in 2 dim array
            // as the corresponding binary value (true = 1, false = 0)
           if (twoDimArray[i][j] === Number(boolVal)) {
               boolCount++;
           }
          }
        }
    } else {
         boolCount = false; // empty array, or invalid dimensions
    }
    return boolCount;
  }

};