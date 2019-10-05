// keys and other dependencies
require('dotenv').config();
const
axios = require('axios'),
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
      smallData = data
      ['tracks']['items'][0],
      title = [
        moment().format()
      ].join('\n'),
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

  this.movieThis = function(movie) {
    let 
    key = process.env.OMDB_KEY,
    url = `http://www.omdbapi.com/?apikey=${key}&t=${movie}&type=movie&`; 
    
    axios({
      method: 'get',
      url,
      responseType: 'json'
    })
    .then(function (response) {
      title = [
        moment().format()
      ].join('\n'),
      showData = [
        'Title: ' + response['data']['Title'],
        'Year: ' + response['data']['Year'],
        'IMDB Rating: ' + response['data']['Ratings'][0]['Value'],
        'Rotten Tomato\'s: ' + response['data']['Ratings'][0]['Value'],
        'Maded in: ' + response['data']['Country'],
        'Plot: ' + response['data']['Plot'],
        'Cast: ' + response['data']['Actors']
      
      ].join('\n\n');
        
      fs.appendFile('log.txt', title + showData + divider, (error) => {
        if(error) {
          console.log(err)
        } else {console.log(`Added to log:\n${showData}`);}
      })
      })
    .catch(function(error) {
      console.log(error)
    });
  
  }

  this.concertThis = (band) => {
    let 
    key = process.env.BIT_KEY,
    url = `https://rest.bandsintown.com/artists/${band}/events?app_id=${key}`;

    axios({
      method: 'get',
      url,
      responseType: 'json'
    })
    .then(function(res) {
      let
      response = res
      ['data'][0],
      showData = [
        'Venue: ' + response['venue']['name'],
        `Location: ${response['venue']['city']}, ${response['venue']['region']}`,
        'Date: ' + response['datetime'], // format time
        (function (){
          if(response['on-sale-datetime']) {
            return 'Tickets Availible: ' + response['on-sale-datetime']
          }
        }())
      ].join('\n\n');
        
      fs.appendFile('log.txt', showData + divider, (error) => {
        if(error) {
          console.log(err)
        } else {console.log(`Added to log:\n${showData}`);}
      })
    })
    .catch(function(error) {
      console.log(error)
    })
  };
}

let liri = new LIRI;
module.exports = liri