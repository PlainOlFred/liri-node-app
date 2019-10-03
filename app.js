// import modules and keys
require('dotenv').config();

const 
axios = require('axios'),
moment = require('moment'),
fs = require('fs'),
Spotify = require('node-spotify-api'),
[cmd, qus] = process.argv.slice(2);

switch(cmd) {

  case 'concert-this': 
    console.log(cmd, qus);
    concertThis();
    break;

  case 'spotify-this-song':
    spotifyThisSong();
    break;

  case 'movie-this':
    movieThis();
    break;

  case 'do-what-it-says':
    doWhatItSays();
    break;

}

  

const spotify = new Spotify({
  id: process.env.CLIENT_ID,
  secret: process.env.SECRET
});

spotify
  .request('https://api.spotify.com/v1/search?q=rush&type=artist&limit=1')
  .then(function(data) {
    const smallData = { data }  
      ['data']['artists']['items']
    console.log(smallData); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
function concertThis(qus) {

}
function spotifyThisSong(qus) {

}
function movieThis(qus) {

}
function doWhatItSays(qus) {

}