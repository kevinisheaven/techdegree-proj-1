/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  { quote: 'It’s fine to celebrate success but it is more important to heed the lessons of failure.', source: 'Bill Gates'},
  { quote: "I've always done whatever I want and always been exactly who I am", source: "Billie Eilish"},
  { quote: "I've been watching you for some time. Can't stop staring at those ocean eyes", source: "Billie Eilish", citation: "album"},
  { quote: "Software is a great combination between artistry and engineering.", source: "Bill Gates"},
  { quote: "Patience is a key element of success", source: "Bill Gates"}
]
console.log(Object.keys(quotes[0]))

console.log(Object.values(quotes[0]))
console.log(Object.keys(quotes[2]))
console.log("hello world")


//let quoteArr = [];
/***
 * `getRandomQuote` function
***/

//grabs an array and a number
  function getRandomQuote(arr, num) {
      return(arr[num].quote)
  }

  //generates a raondom number from the quotes array 
    let randomNum = Math.floor(Math.random() * quotes.length);
     console.log("RANDOM NUMBER: ", randomNum)

console.log(getRandomQuote(quotes, randomNum));


/***
 * `printQuote` function
***/

function printQuote(){
let html = document.querySelector(".quote")
console.log(html)
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);