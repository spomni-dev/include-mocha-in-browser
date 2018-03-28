describe('include-mocha.js', function(){

  var assert = testAssert;

  it( 'Should define the global var "includeMocha".', function(){
    assert.isDefined(includeMocha);
  });

});