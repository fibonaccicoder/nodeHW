//initialize requirements
require("dotenv").config();

//requirements for packages
var request = require('request');
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var inquirer = require('inquirer');
var fs = require("fs");

// pass keys in .env file to js for use
var keys = require('./keys.js');

//import data from keys.js
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

//variables for arguments using process.argv
// var command = process.argv[2];
// var input = process.argv[3];

//opening line runs when application opened
function liriIntro() {
    inquirer.prompt([{
        type: "list",
        name: "command",
        message: "\nHello! I'm Liri.\n I am here to assist you with obtaining information on movies, songs, and recent twitter posts.\n Please start by choosing a command that you would like to carry out from the options below.\n",
        choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-is-says"]
    }])
};


//switch case for choosing which command to carry out 
switch (command) {
    case "my-tweets":
        myTweets();
        break;

    case "spotify-this-song":
        spotifyThis(input);
        break;

    case "movie-this":
        searchOmdb(input);
        break;

    case "do-what-it-says":
        doWhatItSays();

}

//display last 20 tweets, and when they were created
function myTweets() {
    var params = {
        screen_name: 'fibonacci_coder',
        count: 20,
    };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                for (var i = 0; i < tweets.length; i++) {

                    console.log("Here are your last twenty tweets, " + params.screen_name + "!");
                    console.log(tweets[i].text);
                    console.log(tweets[i].created_at);
                    console.log("------------------------")

                });

        }

    }


    //node liri.js spotify-this-song 'song'
    //display artist, song name, preview link, album that song is from, default "the sign" by ace of base 
    function spotifyThis() {
        console.log("Song: " + );
        console.log("Artist: " + );
        console.log("Click here to preview the song!");

    }

    //node liri.js movie-this 'movie'
    //display title, year released, IMDB rating, rotten tomatoes rating, country produced in, language, plot, actors
    //default "Mr. Nobody"
    //key = trilogy
    function searchOmdb() {
        //        * Title of the movie.
        //        * Year the movie came out.
        //        * IMDB Rating of the movie.
        //        * Rotten Tomatoes Rating of the movie.
        //        * Country where the movie was produced.
        //        * Language of the movie.
        //        * Plot of the movie.
        //        * Actors in the movie.
    }


    // 4. `node liri.js do-what-it-says`

    //    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

    //      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

    //      * Feel free to change the text in that document to test out the feature for other commands.
    function doWhatItSays() {

    }