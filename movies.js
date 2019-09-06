require("dotenv").config();
const axios = require("axios");
const fs = require("fs");

getMovies = (searchItem) => {
    axios.get("http://www.omdbapi.com/?apikey=" + process.env.OMDBID + "&t=" + encodeURI(searchItem))
    .then(function(info) {
        let movies = info.data
        if (movies != null) {
            console.log(`
            Title: ${movies.Title}
            Year Released: ${movies.Title}
            IMDB Rating: ${movies.imdbRating}
            Rotten Tomatoes: ${movies.Ratings[1] != undefined ? movies.Ratings[1].Value : "N/A"}
            Country of Production: ${movies.Country}
            Language(s): ${movies.Language}
            Actors/Actresses: ${movies.Actors}
            Plot: ${movies.Plot}
            `);
            fs.appendFile("log.txt", `Movie searched: ${searchItem}\n`, function (err) 
                {
                if (err) {
                    console.log(err);
                    }
            });
        }
    })
    .catch(function(err) {
        console.log(typeof err);
        if (err != "null") {
            console.log(err);
        };
    });
};

module.exports = {
    getMovies
}