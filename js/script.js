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
  { quote: "I've been watching you for some time. Can't stop staring at those ocean eyes", source: "Billie Eilish", citation: "Common Culture, Vol. V by Connor Franta"},
  { quote: "Software is a great combination between artistry and engineering.", source: "Bill Gates", year: "1982"}, 
  { quote: "Patience is a key element of success", source: "Bill Gates"}
]
console.log(Object.keys(quotes[3]))
console.log(Object.values(quotes[0]))
console.log(Object.keys(quotes[2]))
console.log("hello world")


//let quoteArr = [];
/***
 * `getRandomQuote` function
***/

//grabs an array and a number. 
//Pulls quote from the index of the array (arr) with the number generated from num
  function getRandomQuote(arr) {
    let num = Math.floor(Math.random() * arr.length);

      return(arr[num])
  }

/***
 * `printQuote` function
***/

//prints out the random quotes by calling getRandomQuote function
let html = ""
function printQuote(){
let randQuote = getRandomQuote(quotes);

// if (randQuote === randQuote.citation)


 html = `
 <p class ="quote"> ${randQuote.quote} </p>
 <p class ="source"> ${randQuote.source} 
    <span class="citation"> ${randQuote.citation} </span>
    </p>
 `;
 document.querySelector(".quote-box").innerHTML = html; 
}










//use loop to push values from quotes arrays into their own seperate arrays.
//then plug the array values with the printQuote function
// for ( let i = 0; i < quotes.length; i++ ) {
//   let question = questions[i].question;
//   let answer = questions[i].answer;
//   let response = prompt(question);
  
//   if ( response === answer ) {
//     correctAnswers++;
//     correct.push(question);
//   } else {
//     incorrect.push(question);
//   }
// }





/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);