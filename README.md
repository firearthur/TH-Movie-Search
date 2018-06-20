# TH-Movie-Search
This app allows you to search for movies, find some info about them and see your search history.

## Technologies used:
**Front-end**: Angular 6, HTML, Custom CSS.

**Back-end**: NodeJS, ExpressJS, MongoDB, Integrated Movie API

## Usage instructions:
* Clone the repo to your machine
* Make sure you have MongoDB installed and MongoD server is running
* Go to `TheMovieDB.org` and get an API key and create env vars on the root level of the app or inject them manually in `server/src/movieApi.js`
* Make sure you're at the root directory of the app and type the command `npm install` in your terminal
* On the root directory type the command `npm run build-client` to build the front-end files
* On the root directory type the command `npm start` to run the server
* Access the app through your browser(preferably Chrome) at `http://localhost:3300/`

TODO:
* enable production mode in angular
* deploy
* take care of env vars

