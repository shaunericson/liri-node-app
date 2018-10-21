// Liri project

// require("dotenv").config();
// var sy = require("./keys.js")

// NPM Packages

var Spotify = require("node-spotify-api")
// var spotify = new Spotify(keys.spotify);
var spotify = new Spotify({
    id: "963087a88564459280378daf6c661c3a",
    secret: "e58b0e06ada94dc3b56ae7192c488733"
});

var request = require("request");
var moment = require("moment");

var command = process.argv[2];
var userInput = process.argv.slice(3).join(" ");
console.log(userInput)

// if (command === "concert-this") {
switch (command) {
    case "concert-this":
        console.log("works")
        request("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp",
            function (error, response, body) {
                // console.log(body);
                var concerts = JSON.parse(body);
                console.log(concerts);
                for (x = 0; x < concerts.length; x++) {
                    // console.log(concerts[x].venue.name);
                    var concertDateTime = moment(new Date(concerts[x].datetime)).format("MM/DD/YYYY");
                    console.log("////////////////////////////////////////////")
                    console.log("Venue Name: " + concerts[x].venue.name);
                    console.log("Venue Location: " + concerts[x].venue.city + ", " + concerts[x].venue.country);
                    console.log("Venue Date & Time: " + concertDateTime);
                }
            });
        break;
    // } else if (command === "spotify-this-song") {
    case "spotify-this-song":
        spotify.search({ type: "track", query: userInput }, function (err, data) {
            // console.log(data.tracks);
            var tracks = data.tracks;
            // var artists = 
            // console.log(tracks);
            for (x = 0; x < tracks.items.length; x++) {
                // console.log("working")
                // console.log(tracks.items[x])
                console.log("////////////////////////////////////////////")
                artists = tracks.items[x].artists;
                // console.log(artists[0].name);
                for (y = 0; y < artists.length; y++) {
                    // console.log("In here...");
                    // console.log(aritsts[0].name);
                    // console.log(artists.length);
                    console.log("Artists(s): "+ artists[y].name);
                }
                // console.log("Artists: " + tracks.items[x].artists[0].name);
                console.log("Song Name: " + tracks.items[x].name);

            }
        })
    break;
}   




