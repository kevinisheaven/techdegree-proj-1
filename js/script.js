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
  { quote: "It’s fine to celebrate success but it is more important to heed the lessons of failure.", source: "Bill Gates"},
  { quote: "I've always done whatever I want and always been exactly who I am", source: "Billie Eilish,", tag: " Entertianment"},
  { quote: "I've been watching you for some time. Can't stop staring at those ocean eyes", source: "Billie Eilish", citation: "Common Culture, Vol. V by Connor Franta"},
  { quote: "Software is a great combination between artistry and engineering.", source: "Bill Gates", year: "1982"}, 
  { quote: "Patience is a key element of success", source: "Bill Gates"}
]
console.log(Object.keys(quotes[1]))
console.log(Object.values(quotes[0]))


//let quoteArr = [];
/***
 * `getRandomQuote` function
***/

//grabs an array and a random number. 
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
 html = `
 <p class ="quote"> ${randQuote.quote} </p>
 <p class ="source"> ${randQuote.source} 
    
 `;

 //creates two variables that allow the background color to randomly change
 //when printQuote() is clicked
 const pageBody = document.querySelector("body");
 let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
 pageBody.style.background = color;

//if quotes contain a citation property and if they contain a year property
//these strings will be concatenated into the html string 
 if (randQuote.citation) {
   html+= `<span class="citation"> ${randQuote.citation} </span>`;
 } else if (randQuote.year) {
   html+= `<span class="year"> ${randQuote.year} </span>`;
} else if (randQuote.tag) {
  html+= `<span> ${randQuote.tag} </span>`;
}

html+= `</p>`;
 document.querySelector(".quote-box").innerHTML = html; 
}

function timedQuote() {
  let time = setInterval(printQuote, 10000);
}
timedQuote()
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);