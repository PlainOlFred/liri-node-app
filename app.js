// import modules and declare cariables
const 
[moment, fs, liri] = [require('moment'), require('fs'), require('./liri-cmd')];
let
[cmd, qus] = [process.argv[2], process.argv.splice(3).join('%20')],
header = ' '// to log command and query


if(cmd){
  switch(cmd) {
    case 'concert-this': 
<<<<<<< HEAD
      liri.concertThis(qus); //for / use %252F, for ? use %253F, for * use %252A, and for " use %27C
      break;
  
    case 'spotify-this-song':
      (qus) ? liri.spotifyThisSong(qus) : liri.spotifyThisSong('ace%20base%20the%20sign') ;
      break;
    
    case 'spotify-this-artist':
      console.log(cmd);
      liri.spotifyThisArtist(qus);
      break;
  
    case 'movie-this':
      (qus) ? liri.movieThis(qus) : (liri.movieThis('mr%20nobody'), 
      console.log(`\nIf you haven\'t watched Mr. Nobody\n\nIt's on Netflix`)); // <http://www.imdb.com/title/tt0485947/>
      break;
  
    case 'do-what-it-says':
      fs.readFile('random.txt', 'utf8', function (err, data) {
        if(err) {
          console.log(err);
        }
        [cmd, qus] = data.split(',');
        switch(cmd) {
          case 'concert-this': liri.concertThis(qus); break;
          case 'spotify-this-song': liri.spotifyThisSong(qus); break;
          case 'spotiy-this-artist': liri.spotifyThisArtist(qus); break;
          case 'movie-this': liri.movieThis(qus); break;
        };
         
      });
<<<<<<< HEAD
  
=======
>>>>>>> 3313ca0056e942723df4b6894734d05418900bfd
      break;
    default:
      console.log('not a command')
  }
}