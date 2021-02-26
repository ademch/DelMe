
const assert = require('assert');
var Calc = require('./calc.js');

describe('Taylor series', function() {
    t = Calc.Taylor();
    it('should have a Taylor function defined', function() {
        assert.equal(typeof Calc.Taylor, "function");
    });
  
    it('has to be equal to 10', function() {
      assert.equal(Calc.Taylor(), 10);
    })
  })