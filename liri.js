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