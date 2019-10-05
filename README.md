# liri-node-app



## MVP

* [x] CLI

* [x] Search Song

      * [x] ] [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

      * [x] Displays default song 
      
* [x] Search Movie

      * [x] [OMDB API](http://www.omdbapi.com/)

      * [x] Displays default movie

      * [x] Sugest a movie

* [x] Search Concert

* [x] Search Random

## Developmental features
* [ ] 

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

## Example
