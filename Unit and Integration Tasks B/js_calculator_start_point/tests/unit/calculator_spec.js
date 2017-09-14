var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it("should add 3 + 10", function() {
    calculator.numberClick(3)
    calculator.operatorClick("+")
    calculator.numberClick(10);
    calculator.operatorClick("=")
    assert.strictEqual(calculator.runningTotal,13);
  })

  it("should subtract 3 - 10", function(){
    calculator.numberClick(10);
    calculator.operatorClick("-");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.strictEqual(calculator.runningTotal,7)
  })

  it("should multiply 3 * 10", function(){
    calculator.numberClick(3);
    calculator.operatorClick("*");
    calculator.numberClick(10);
    calculator.operatorClick("=");
    assert.strictEqual(calculator.runningTotal,30);
  })

  it("should devide 15 / 3", function(){
    calculator.numberClick(15);
    calculator.operatorClick("/");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('should clear click', function(){
    calculator.numberClick(5);
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal,0);
  })

  it('should show operater', function(){
    calculator.operatorClick("+");
    
    assert.strictEqual(calculator.previousOperator,"+");
  })


});














