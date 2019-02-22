const songs = require("./songs.js");

// const axios = require("axios");
// const spotifyKeys = require("keys.js");
// const Spotify = require("node-spotify-api");

// const spotify = new Spotify(spotifyKeys.spotify)

args = process.argv.slice(2);
console.log(songs);

switch(args[0]) {
    case "spotify-this-song":
    songs.getSongs(args.slice(1).join(" "));
};