const spotifyKeys = require("./keys.js");
const Spotify = require("node-spotify-api");
const fs = require("fs");
require("dotenv").config();
args = process.argv.slice(2);

const getSongs = (searchItem) => {
const spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
})
spotify.search({type: 'track', query: searchItem, limit: "1"})
.then(function(info) {
    // console.log(info);
    console.log(`Spotify This Results
    Artist: ${info.tracks.items[0].artists[0].name}
    Song: ${info.tracks.items[0].name}
    Preview: ${info.tracks.items[0].preview_url}
    On Album: ${info.tracks.items[0].album.name}`);
    fs.appendFile("log.txt", `Song searched: ${searchItem}\n`,function (err) 
        {
            if (err) {
                console.log(err)

            }
        });

})
// .catch(function(err) {
    
//     if (err) {
//         console.log(err.response);
//     };
// })
};

module.exports = {
    getSongs,
};