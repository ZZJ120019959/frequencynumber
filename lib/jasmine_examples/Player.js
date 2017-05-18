function Player() {
}

var format = function(words ,count) {
  return words + ' '+ count;
}

Player.main = function(words) {
    if(words !== '')
    {
        var wordArray = words.split(' ');
        return wordArray.map((w) => format(w,1)).join( '\r\n');
    }
    return '';
}

module.exports = Player;
