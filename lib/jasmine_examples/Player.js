function Player() {
}

var format = function(words ,count) {
  return words + ' '+ count;
}
var group = function(wordArray)
{
    return wordArray.reduce((array ,word) =>{
        var entry = array.find((e) => e.word ===word);
        if(entry) {
            entry.count++;
        }
        else {
            array.push({word :word , count :1})
        }
        return array;
    },[]);
}
Player.main = function(words) {
    if(words !== '')
    {
        var wordArray = words.split(' ');
        var groupedWords = group(wordArray);
        groupedWords.sort((x,y) => y.count - x.count);
        return groupedWords.map((e) => format(e.word, e.count)).join('\r\n');
    }
    return '';
}

module.exports = Player;
