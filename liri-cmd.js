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
    .request(`https://api.spotify.com/v1/search?q=${song}&type=track&limit=1`)
    .then(function(data) {
      const 
      smallData = data
      ['tracks']['items'][0],
      title = [
        moment().format()
      ].join('\n'),
      showData = [
        title + ' spotify-this-song',
        'Song: ' + smallData['name'],
        'Artist(s): ' + smallData['artists'][0]['name'],
        'Album: ' + smallData['album']['name'],
        ['Preview: ', (smallData['preview_url']) ? smallData['preview_url'] : 'No Preview'].join(' '),
      ].join('\n\n');
       
       
      fs.appendFile('log.txt', title + showData + divider, (error) => {
        if(error) {
          console.log(err)
        } else {console.log(`\nAdded to log:\n${showData}\n`);}
      })
      
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });

  };
  
  this.spotifyThisArtist = function(artist) {
    const spotify = new Spotify({
      id: process.env.CLIENT_ID,
      secret: process.env.SECRET
    });
    spotify
    .request(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=1`)
    .then(function(data) {
     
      const
      smallData = data['artists']['items'][0],
      title = [
        moment().format()
      ].join('\n'),
      showData = [
        title + ' spotify-this-artist',
        'Artist(s): ' + smallData['name'],
        'Genre: ' + smallData['genres'][0],
        'Followers: ' + smallData['followers']['total'],
        'Trending: ' + smallData['popularity']+'%'
      ].join('\n\n');
       
    
      fs.appendFile('log.txt', title + showData + divider, (error) => {
        if(error) {
          console.log(err)
        } else {console.log(`\nAdded to log:\n${showData}\n`);}
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
      console.log(response['data'])
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
        } else {console.log(`Added to log:\n${showData}/n`);}
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
        ['Ticket go on sales: ', (response['on-sale-datetime']) ? response['on-sale-datetime'] : 'Check Back Soon'].join(' ')
         
      ].join('\n\n');
        
      fs.appendFile('log.txt', showData + divider, (error) => {
        if(error) {
          console.log(err)
        } else {console.log(`Added to log:\n${showData}\n`);}
      })
    })
    .catch(function(error) {
      console.log(error)
    })
  };
}

let liri = new LIRI;
module.exports = liri