var keys = require("./keys");

var input = process.argv[2];

//spotify
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

//bandsintown
var axios = require("axios");

var argOne = process.argv[3];
var argTwo = process.argv[4];

//
var pick = function (input, argOne, argTwo) {
    switch (input) {
        case "music":
            console.log("this is music section");



            var getMusic = function () {
                spotify.search({
                        type: argOne,
                        query: argTwo,
                        limit: 1
                    }, function (err, data) {
                        if (err) {
                            return console.log('Error occurred: ' + err);
                        }
                        console.log(data.tracks.items[0].name);
                    }

                )

            }
            getMusic();
            break;


        case "band":
            console.log("this is band section");

            var getBand = function() {
                var queryURL = "https://rest.bandsintown.com/artists/" + argOne + "/events?app_id=codingbootcamp";

                axios.get(queryURL).then(function(response) {
                    console.log(response.data[0].venue);
                })
            };
            getBand();
            break;


        case "movie":
            console.log("this is movie section");
            getMovie();
            break;
    }
}

pick(input, argOne, argTwo);