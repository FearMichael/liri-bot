const spotifyKeys = require("./keys.js");
const Spotify = require("node-spotify-api");
require("dotenv").config();
args = process.argv.slice(2);

const getSongs = (searchItem) => {
// let queryurl = "https://api.spotify.com/v1/search/q=" + encodeURI(searchItem) + "limit=3"
const spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
    // id: "be817e6e7f63470d8ca056ec91dd345e",
    // secret: "abbf89a856e64c3fa22e341bc20194ab"
})
spotify.search({type: 'track', query: searchItem, limit: "3"})
.then(function(info) {
    console.log(info);
    // console.log(info.tracks.items[0].)

})
.catch(function(err) {
    console.log(err);
})
};

module.exports = {
    getSongs,
};


// getSongs(args.slice(1).join(" "));