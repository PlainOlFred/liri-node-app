// keys and other dependencies
require('dotenv').config();
const
axios = require('axios')
moment =require('moment'),
Spotify = require('node-spotify-api'),
fs = require('fs'),
divider = '\n--------------------\n';

LIRI = function() {

  this.spotifyThisSong = function(song) {
    const spotify = new Spotify({
      id: process.env.CLIENT_ID,
      secret: process.env.SECRET
    });
    spotify
    .request(`https://api.spotify.com/v1/search?q=${song}&type=track,artist&limit=1`)
    .then(function(data) {
      const 
      title = moment(),
      smallData = data
        ['tracks']['items'][0],
      showData = [
        'Artist(s): ' + smallData['artists'][0]['name'],
        'Song: ' + smallData['name'],
        'Preview: ' + smallData['preview_url'],
        'Album: ' + smallData['album']['name'],
      ].join('\n\n');
       
       
      fs.appendFile('log.txt', title + showData + divider, (error) => {
        if(error) {
          console.log(err)
        } else {console.log(`Added to log:\n${showData}`);}
      })
      
  })
    .catch(function(err) {
      console.error('Error occurred: ' + err); 
    });

  };


  this.concertThis = (band) => {};
  this.movieThis = (movie) => {};
  this.doWhatItSays = (what) => {};

}


let test = new LIRI;
test.spotifyThisSong('stan')




