// import modules and declare cariables
const 
[moment, fs, liri] = [require('moment'), require('fs'), require('./liri-cmd')];
let
[cmd, qus] = [process.argv[2], process.argv.splice(3).join('%20')],
header = ' '// to log command and query


if(cmd){
  switch(cmd) {
    case 'concert-this': 
      //for / use %252F, for ? use %253F, for * use %252A, and for " use %27C
      liri.concertThis(qus);
      break;
  
    case 'spotify-this-song':
      (qus) ? liri.spotifyThisSong(qus) : liri.spotifyThisSong('the+sign+ace-of-base');
      break;
    
    case 'spotify-this-artist':
      liri.spotifyThisArtist(qus);
      break;
  
    case 'movie-this':
      (qus) ? liri.movieThis(qus) : (liri.movieThis('mr+nobody'),
      console.log(`\nIf you haven\'t watched Mr. Nobody\n\nIt's on Netflix`));
      break;
  
    case 'do-what-it-says':
      fs.readFile('random.txt', 'utf8', function(err, data){
        if(err) {
          console.log(err);
        }
        [cmd, qus] = data.split(':')
        console.log(cmd, qus) // **spotify-this-song I Want it That Way
        liri.spotifyThisSong(qus);
      });
      break;
    default:
      console.log('not a command')
  }
}