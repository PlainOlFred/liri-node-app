// import modules and keys
const 
moment = require('moment'),
fs = require('fs'),
liri = require('./liri-cmd'),
[cmd, qus] = [process.argv[2], process.argv.splice(3).join('%20')];




if(cmd){
  switch(cmd) {
    case 'concert-this': 
      // console.log(cmd);
      concertThis();
      break;
  
    case 'spotify-this-song':
      console.log(cmd);
      liri.spotifyThisSong(qus)
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