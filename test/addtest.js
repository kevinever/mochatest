var assert = require('chai').assert;
var add = require('../add');

describe('Sum', function(){
it('it should return the sum 10', function(){
	let result =add(5);
assert.equal(result,10);
});
});