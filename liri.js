var keys = require("./keys");
require("dotenv").config();
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var getMusic = function () {
    spotify.search({
            type: 'track',
            query: 'All the Small Things'
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log(data);
        }

    )
    
}

var input = process.argv[2];

var pick = function (input) {
    switch (input) {
        case "music":
            console.log("this is music section");
            getMusic();
            break;
        case "band":
            console.log("this is band section");
            getBand();
            break;
        case "movie":
            console.log("this is movie section");
            getMovie();
            break;
    }
}

pick(input);