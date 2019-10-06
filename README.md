# liri-node-app
  > Multi-entetainment language base searcher


## MVP

- [x] CLI for inputs

- [x] Search Song

     - [x] Request response from node-spotify-api

     - [x] Displays artist information
     
     - [x] Displays song information or ...

     - [x] Displays default song information 
      
- [x] Search Movie

     - [x] Resquest response from OMDB 
     
     - [X] Displays movie information

     - [x] Displays default movie

     - [x] Suggest a movie

- [x] Search Concert

     - [x] Request response from BandInTown API
     
     - [x] Displays venue, date, and location of artist/band's next show

- [x] Search Random

     - [x] Displays information from random.txt file

## Developmental features
- [ ] Allow special characters(!,$,@) in searches
- [ ] Days until evnet (concert-this module)
- [ ] Directions to the venuce (concert-this module)

## Prerequisites

   
   - [DotEnv](https://www.npmjs.com/package/dotenv)

   
   - [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   
   - [Axios](https://www.npmjs.com/package/axios)

  
  - [OMDB API](http://www.omdbapi.com/)
  
  - [Moment](https://www.npmjs.com/package/moment)
  
 
  

## Usage

  1. Create log.txt file in local directory

  2. Rename .env-sample to .env and insert your keys
    
     - OMDB 
     - Spotify client ID and secret
     - Bands in Town

  4. Install node packages (links [above](Prerequisites))
  
  5. Node commmands
     - Movie search:
          - By movie Title: ```node app.js movie-this <moive-title>```
          - By Actor: ```node app.js actor-this <actor>```
     - Song Search
          - By Song: ```node app.js spotify-this-song <song title>```
          - By Artistis: ```node app.js spotify-this-artist <artist/band>```
     - Concert Search
          - ```node app.js concert-this <artist>```
     - Random Text Search
          - ```node app.js do-what-it-says```

  

## Examples
https://github.com/PlainOlFred/liri-node-app/issues/21#issue-503046979
