/*jslint node: true */
/*global describe, it, before, beforeEach, after, afterEach */
var mocha = require('mocha');
var MDA = require('../TwoDimensionalArrays');

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

 
describe('TwoDimensionalArray.generate', function() {

  it('should return a 5x4 multi-dimensional array, containing random boolean values', function() {
    //var result = [ [1,0,1,1], [0,1,0,0], [1,1,0,1], [0,0,0,1], [0,1,1,1] ] ;
    var result = MDA.generate(5,4);
    expect(result).to.be.instanceof(Array);
    expect(result).to.have.length(5);
    for(var i=0; i<result.length; i++) {
      expect(result[i]).to.have.length(4);
      for(var j=0; j<result[i].length; j++) {
        expect(result[i][j]).to.be.a('number');
        expect(result[i][j]).to.be.at.most(1);  // can we test for 0 or 1, to be more precise?
      }
    }
  });

});

// remove commented var result lines
