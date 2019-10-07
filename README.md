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
          - By Actor: ```node app.js actor-this <actor>```
     - Song Search
          - By Song: ```node app.js spotify-this-song <song title>```
     - Concert Search
          - ```node app.js concert-this <artist>```
     - Random Text Search
          - ```node app.js do-what-it-says```

  

## Examples

### Demonstrations

#### spotify-this-song
![spotify-this-song](https://user-images.githubusercontent.com/52435014/66263888-1a26d380-e7c0-11e9-93b8-9a4e7a62b886.gif)

#### spotify-this-artist
![spotify-artist](https://user-images.githubusercontent.com/52435014/66264007-05980a80-e7c3-11e9-97ba-e0e31d561894.gif)

#### spotify-this-song (default)

![spotify-song_default](https://user-images.githubusercontent.com/52435014/66263981-86a2d200-e7c2-11e9-9dd6-c60836718a01.gif)

#### movie-this

![movie-this](https://user-images.githubusercontent.com/52435014/66264026-41cb6b00-e7c3-11e9-9322-ab294539e7b0.gif)

#### movie-this (default)

![movies-this_default](https://user-images.githubusercontent.com/52435014/66264030-51e34a80-e7c3-11e9-9c66-e8c46c15f56f.gif)

#### concert-this

![concert-this](https://user-images.githubusercontent.com/52435014/66264033-6293c080-e7c3-11e9-957d-080d75dddc6a.gif)

#### do-what-it-says

![do-what-it-says](https://user-images.githubusercontent.com/52435014/66264037-73443680-e7c3-11e9-9e62-f5b4be149f0e.gif)

#### appendFile log.txt

![log](https://user-images.githubusercontent.com/52435014/66264074-725fd480-e7c4-11e9-905e-a9146c25a7bf.gif)






