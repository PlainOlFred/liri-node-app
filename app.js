// import modules and keys
const 
moment = require('moment'),
fs = require('fs'),
[cmd, qus] = [process.argv[2], process.argv.splice(3).join('%20')];

console.log(qus)


if(cmd){
  switch(cmd) {
    case 'concert-this': 
      console.log(cmd);
      concertThis();
      break;
  
    case 'spotify-this-song':
      console.log(cmd);
      break;
  
    case 'movie-this':
        console.log(cmd);
      break;
  
    case 'do-what-it-says':
      doWhatItSays();
      break;
    default:
      console.log('not a command')
  }
}


  

function concertThis(qus) {

}
function spotifyThisSong() {
  console.log('in function' + qus)
  spotify
  .request(`https://api.spotify.com/v1/search?q=${qus}&type=track,artist&limit=1`)
  .then(function(data) {
    const smallData = data
      ['tracks']  
      
    console.log(smallData); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });

  // * Artist(s)
  // * The song's name
  // * A preview link of the song from Spotify
  // * The album that the song is from
  // * If no song is provided then your program will default to "The Sign" by Ace of Base.

}
function movieThis(qus) {

}
function doWhatItSays(qus) {

}