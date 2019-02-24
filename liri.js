const songs = require("./songs.js");
const concert = require("./concert.js");
const movies = require("./movies.js");
const inquirer = require("inquirer");
const figlet = require("figlet");
// const ascii = require("./liri-ascii.txt")
// const fs = require("fs");
args = process.argv.slice(2);


console.log(figlet.textSync('Welcome to the \nCLI Entertainer!', {
    font: 'Banner',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));

// figlet.fonts(function(err, fonts) {
//     if (err) {
//         console.log('something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.dir(fonts);
// });

// console.log(ascii);

// const userInputField = new Promise(function(resolve, reject) {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "userInput",
//             message: question
//         }
//     ]).then(function(answer) {
//         return answer.userInput
//     });
// }


//  function getUserInput(question) {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "userInput",
//             message: question
//         }
//     ]).then(function(answer) {
//         return answer.userInput
//     });
// };

// getUserInput("How are you today?");

inquirer.prompt([
    {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["Search for a movie!", "Search for a song!", "Search for a concert!"]
    }
]).then(function(answers) {
    console.log(answers.action);
    switch(answers.action) {
        case "Search for a movie!":
        inquirer.prompt([
                    {
                        type: "input",
                        name: "userInput",
                        message: "What movie are you looking for?"
                    }
                ]).then(function(answer) {
                    movies.getMovies(answer.userInput);
                });
        break;
        case "Search for a song!":
        inquirer.prompt([
                    {
                        type: "input",
                        name: "userInput",
                        message: "What song are you looking for?"
                    }
                ]).then(function(answer) {
                    songs.getSongs(answer.userInput);
                });
        break;
        case "Search for a concert!":
        inquirer.prompt([
            {
                type: "input",
                name: "userInput",
                message: "What artist do you want to see?"
            }
        ]).then(function(answer) {
            concert.getBandInfo(answer.userInput);
        });
        break;
    };
});


// switch(args[0]) {
//     case "spotify-this-song":
//     songs.getSongs(args.slice(1).join(" "));
//     break;
//     case "concert-this":
//     console.log("Concerting")
//     concert.getBandInfo(args.slice(1).join(" "));
//     break;
//     case "movie-this":
//     movies.getMovies(args.slice(1).join(" "));
//     break;
// };