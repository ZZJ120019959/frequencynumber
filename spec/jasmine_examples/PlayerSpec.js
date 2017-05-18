describe("Player", function() {
  var Player = require('../../lib/jasmine_examples/Player');
  var Song = require('../../lib/jasmine_examples/Song');

  it ("empty", function(){
    expect ( Player.main('')).toEqual('');
  });
  it ("one word", function(){
    expect ( Player.main('he')).toEqual('he 1');
  });
  it("two different words",function(){
    var result = Player.main('he is');
    expect(result).toEqual('he 1\r\nis 1');
  });
  it("three words",function(){
    var result = Player.main('he is he');
    expect(result).toEqual('he 2\r\nis 1');
  });


});
