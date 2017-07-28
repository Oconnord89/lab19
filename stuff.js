var lyrics = ['Cant send a postcard, from the future to the past','White Whale, Holy Grail!', 'Get out, Eject, Escape From the Prison Planet', 'Only the fall is mine, and Im finding it more than fine', 'The fiction will see the real, the answer will question still'];


var lyric = lyrics[Math.floor(Math.random() * lyrics.length)]

//module.exports = lyrics;
module.exports.lyric = lyric;
console.log(lyrics[Math.floor(Math.random() * lyrics.length)]);
