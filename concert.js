const axios = require("axios");
let moment = require("moment");
require("dotenv").config();
const fs = require("fs");

const getBandInfo = (searchItem) => {
    axios.get("https://rest.bandsintown.com/artists/" + encodeURI(searchItem) + "/events?app_id=" + process.env.bandsid)
        .then(function (info) {
            let concerts = Object.values(info.data);
            // console.log(concerts);
            if (concerts) {
                concerts.slice(0, 3).forEach(elem => {
                    console.log(`
                Venue: ${elem.venue.name} 
                Venue Location: ${elem.venue.city}, ${elem.venue.region}
                Lat / Long: ${elem.venue.latitude} / ${elem.venue.longitude}
                Event Date: ${moment(elem.datetime).format("MM/DD/YYYY @ hh:mm a ")}
                `);
                });
                fs.appendFile("log.txt", `Concert searched: ${searchItem}\n`, function (err) {
                    if (err) {
                        console.log(err)
                    }
                });
            } else {
                console.log("Looks like that's not available... try another concert.")
            };
        }).catch(function (err) {
            if (err) {
                console.log(err);
            };
        });
};
module.exports = {
    getBandInfo
}