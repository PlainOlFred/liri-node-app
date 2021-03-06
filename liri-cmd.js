// keys and other dependencies
require('dotenv').config();
const
axios = require('axios'),
moment =require('moment'),
Spotify = require('node-spotify-api'),
fs = require('fs'),
divider = '\n--------------------\n';

LIRI = function() {

  this.spotifyThisSong = (song) => {
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
        moment().format(), ' spotify-this-song'
      ].join('\n'),
      showData = [
<<<<<<< HEAD
        title,
=======
        title + ' spotify-this-song',
>>>>>>> 3313ca0056e942723df4b6894734d05418900bfd
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
  
  this.spotifyThisArtist = (artist) => {
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
<<<<<<< HEAD
        moment().format(), 'spotify-this-artist'
=======
        moment().format()
>>>>>>> 3313ca0056e942723df4b6894734d05418900bfd
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

  this.movieThis = (movie) => {
    let 
    key = process.env.OMDB_KEY,
<<<<<<< HEAD
    url = `http://www.omdbapi.com/?apikey=${key}&t=${movie}&type=movie`,
    title; 
=======
    url = `http://www.omdbapi.com/?apikey=${key}&t=${movie}&type=movie`; 
>>>>>>> 3313ca0056e942723df4b6894734d05418900bfd
    
    axios({
      method: 'get',
      url,
      responseType: 'json'
    })
    .then((response) => {
      title = [
        moment().format(), 'movie-this'
      ].join(' '),
      showData = [
        title,
        'Title: ' + response['data']['Title'],
        'Year: ' + response['data']['Year'],
        'IMDB Rating: ' + response['data']['Ratings'][0]['Value'],
        'Rotten Tomato\'s: ' + response['data']['Ratings'][0]['Value'],
        'Maded in: ' + response['data']['Country'],
        'Plot: ' + response['data']['Plot'],
        'Language: ' + response['data']['Language'],
        'Cast: ' + response['data']['Actors'],
        'Box Office: ' + response['data']['BoxOffice']
      
      ].join('\n\n');
        
      fs.appendFile('log.txt', title + showData + divider, (error) => {
        if(error) {
          console.log(err)
        } else {console.log(`\nAdded to log:\n${showData}\n`);}
      })
      })
    .catch((error) => {
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
      title = [
        moment().format(), 'concert-this'
      ].join(' '),
      response = res
      ['data'][0],
      showData = [
        title,
        'Venue: ' + response['venue']['name'],
        `Location: ${response['venue']['city']}, ${response['venue']['region']}`,
        'Date: ' + response['datetime'], // format time
<<<<<<< HEAD
        ['Ticket go on sales: ', (response['on-sale-datetime']) ? response['on-sale-datetime'] : 'Check Back Soon'].join(' ')
         
=======

        // (function (){
        //   if(response['on-sale-datetime']) {
        //     return 'Tickets Availible: ' + response['on-sale-datetime']
        //   }
        //   return "null"
        // }())
        (() => {if(response['on-sale-datetime']){return 'Tickets Availible: ' + response['on-sale-datetime']}})()
        // (() => response['on-sale-datetime'] ? 'Tickets Availible: ' + response['on-sale-datetime']:"null")()


>>>>>>> 3313ca0056e942723df4b6894734d05418900bfd
      ].join('\n\n');
        
      fs.appendFile('log.txt',title + showData + divider, (error) => {
        if(error) {
          console.log(err)
        } else {console.log(`\nAdded to log:\n${showData}\n`);}
      })
    })
    .catch(function(error) {
      console.log(error)
    })
  };

}

let liri = new LIRI;
module.exports = liri