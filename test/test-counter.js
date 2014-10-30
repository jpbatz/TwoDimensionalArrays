/*jslint node: true */
/*global describe, it, before, beforeEach, after, afterEach */

var mocha = require('mocha');
var TDA = require('../TwoDimensionalArrays');

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe('TwoDimensionalArrays.count', function() {
  it('calling TDA with 2 arguments: an array and a boolean value', function() {
    var sample_array = [[1,0],[0,1],[0,0],[0,0]];
    //var result = TDA.count(sample_array, true);
    var result = TDA.count(sample_array, false);
    //expect(result).to.be.instanceof(Array);
    expect(result).to.be.a('number');
    //result.should.equal(2);
    result.should.equal(6);
  });
});
