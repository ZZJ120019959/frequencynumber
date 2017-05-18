function Player() {
}

var format = function(words ,count) {
  return words + ' '+ count;
}
Player.prototype.main = function(words) {
  if(words !== '') {
    return format(words,1);
  }
  else{
    return '';
  }
}

module.exports = Player;
