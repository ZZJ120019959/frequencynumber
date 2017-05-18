describe("Player", function() {
  var Player = require('../../lib/jasmine_examples/Player');
  var Song = require('../../lib/jasmine_examples/Song');
  var player;
  var song;

  it ("should return ''when given ''", function(){
    expect ( Player.main('')).toEqual('');
  });

});
