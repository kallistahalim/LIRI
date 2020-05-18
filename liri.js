var keys = require("./keys");

var input = process.argv[2];

//spotify
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

//bandsintown & OMDB
var axios = require("axios");

//information
var argOne = process.argv.slice(3).join(" ");

console.log(argOne);

var pick = function (input, argOne, argTwo) {
    switch (input) {
        case "music":
            console.log("this is music section");

            var getMusic = function () {
                spotify.search({
                        type: 'track',
                        query: argOne,
                        limit: 1
                    }, function (err, data) {
                        if (err) {
                            return console.log('Error occurred: ' + err);
                        }
                        console.log(data.tracks);
                    }

                )

            }
            getMusic();
            break;


        case "band":
            console.log("this is band section");

            var getBand = function () {
                var queryURL = "https://rest.bandsintown.com/artists/" + argOne + "/events?app_id=codingbootcamp";

                axios.get(queryURL).then(function (response) {
                    console.log(response.data[0].venue);
                })
            };
            getBand();
            break;


        case "movie":
            console.log("this is movie section");

            var getMovie = function () {
                var queryURL = "http://www.omdbapi.com/?i=tt3896198&apikey=" + keys.OMDBKey.APIKey + "&t=" + argOne;
                axios.get(queryURL).then(function (response) {
                    console.log(response.data);
                })
            };
            getMovie();
            break;
    }
}

pick(input, argOne);