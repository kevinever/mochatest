var assert = require('chai').assert;
var sub = require('../sub');

describe('SUB', function(){
	it('should return substraction', function(){
   let subs =sub(10);
   assert.equal(subs,0);
	});
});