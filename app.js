// import modules and declare cariables
const 
[moment, fs, liri] = [require('moment'), require('fs'), require('./liri-cmd')];
let
[cmd, qus] = [process.argv[2], process.argv.splice(3).join('%20')],
header = ' '

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
        if(qus) {
          liri.movieThis(qus)
        } else {
          qus = 'mr+nobody' //Set Default
          liri.movieThis(qus)
        }
        
      break;
  
    case 'do-what-it-says':
      doWhatItSays();
      break;
    default:
      console.log('not a command')
  }
}