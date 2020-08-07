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
console.log(Object.keys(quotes[1]))

console.log(Object.values(quotes[1]))

//let quoteArr = [];
/***
 * `getRandomQuote` function
***/
//  function getRandomQuote(arr) {
//    for (let i = 0; arr.length; i++) {
//     let getQuote = arr[i];
//     let aQuote = Object.keys(arr);
    
//     if (getQuote === aQuote) {
//       quoteArr.push(getQuote);
//       console.log(quoteArr);
//     }
//     //console.log(quote)
//    }
//   return getQuote;
//   // let randQuo = Math.floor(Math.random() * quotes.length);
//   // randQuo = quotes.length[i]
//   // console.log(randQuo)
// //alert(arr[i])

//}
console.log(getRandomQuote(quotes));
/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);