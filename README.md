# liri-node-app
  > Multientertainment Language Base Searcher


## MVP

- [x] CLI for inputs

- [x] Search Song

     - [x] Requests response from node-spotify-api

     - [x] Displays artist information
     
     - [x] Displays song information or ...

     - [x] Displays default song information 
      
- [x] Search Movie

     - [x] Resquests response from OMDB 
     
     - [X] Displays  movie information or ..

     - [x] Displays default movie, and

     - [x] Suggests a movie

- [x] Search Concert

     - [x] Requests response from BandInTown API
     
     - [x] Displays venue, date, and location of artist/band's next show

- [x] Search Random

     - [x] Executes cmd and query from random.txt file

## Developmental features
- [ ] Allow special characters(!,$,@) in searches
- [ ] Display until evnet (concert-this module)
- [ ] Giv directions to the venuce (concert-this module)

## (#Prerequisites)

   
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

  4. Install node packages (links [above](#Prerequisites))
  
  5. Node commmands
     - Movie search:
          - By movie Title: ```node app.js movie-this <moive-title>```
     - Song Search
          - By Song: ```node app.js spotify-this-song <[artist] song title>```
          - By Artist: ```node app.js spotify-this-artist <artist>```
     - Concert Search
          - ```node app.js concert-this <artist>```
     - Random Text Search
          - ```node app.js do-what-it-says```

  

## Examples

### Demonstrations

#### spotify-this-song
![spotify-this-song](https://user-images.githubusercontent.com/52435014/66310850-cc4ec000-e8d2-11e9-8710-919abd75475f.gif)

#### spotify-this-artist
![spotify-this-artist](https://user-images.githubusercontent.com/52435014/66311057-310a1a80-e8d3-11e9-9ada-f26539bce06d.gif)

#### spotify-this-song (default)
![spotify-this-song_default](https://user-images.githubusercontent.com/52435014/66311222-978f3880-e8d3-11e9-8d07-86fdff330fc1.gif)

#### movie-this
![movie-this](https://user-images.githubusercontent.com/52435014/66311376-ec32b380-e8d3-11e9-9dd7-25e167cbad89.gif)

#### movie-this (default)
![movie-this_default](https://user-images.githubusercontent.com/52435014/66311524-47fd3c80-e8d4-11e9-9541-2003a16da5b1.gif)

#### concert-this
![concert-this](https://user-images.githubusercontent.com/52435014/66311683-9f031180-e8d4-11e9-9c8c-52dc5950ab79.gif)

#### do-what-it-says
![do-what-it-says](https://user-images.githubusercontent.com/52435014/66311809-facd9a80-e8d4-11e9-8c02-01d9024a0c8d.gif)

#### appendFile log.txt

![log](https://user-images.githubusercontent.com/52435014/66264074-725fd480-e7c4-11e9-905e-a9146c25a7bf.gif)






