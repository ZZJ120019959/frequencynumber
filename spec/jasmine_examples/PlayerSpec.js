describe("Player", function() {
  var Player = require('../../lib/jasmine_examples/Player');
  var Song = require('../../lib/jasmine_examples/Song');

  it ("empty", function(){
    expect ( Player.main('')).toEqual('');
  });
  it ("one word", function(){
    expect ( Player.main('he')).toEqual('he 1');
  });


});
