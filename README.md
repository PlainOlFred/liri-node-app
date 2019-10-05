# liri-node-app



## MVP

* [x] CLI

* [x] Search Song

      * [x] Request response node-spotify-

      * [x] Displays default song 
      
* [x] Search Movie

      * [x] Resquest response from OMDB 

      * [x] Displays default movie

      * [x] Suggest a movie

* [x] Search Concert

* [x] Search Random

## Developmental features
* [ ] 

## Prerequisites

    - [DotEnv](https://www.npmjs.com/package/dotenv)

    - [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

    - [Axios](https://www.npmjs.com/package/axios)

    - [OMDB API](http://www.omdbapi.com/)

    -[Moment](https://www.npmjs.com/package/moment)
  

## Usage

  1. Create log.txt file in local directory

  2. Make copy of .env-sample  and insert your keys
    * OMDB 
    * Spotify client ID and secret
    * Bands in Town
  
  3. Set defaults in app.js
    * Movie Deafault 

  ```
  else {
        //Set Default
        liri.movieThis('mr+nobody');
        // <http://www.imdb.com/title/tt0485947/>
        console.log(`If you haven\'t watched Mr. Nobody\n\nIt's on Netflix`);
      };
  ```

    * Song Deafault

  ```
  ```

  4. Install node packages (links [above](Prerequisites))

    * axois

## Example
