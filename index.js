const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = function() {
  
  
  return tutorials.map(function(title) {
    return (title.split(" ").map(function(word) {return word.charAt(0).toUpperCase() + word.slice(1)})).join(' ')
  });
  
}

console.log(titleCased())




/*const textArray = [
  "This is the first sentence.",
  "Here is another one.",
  "The final sentence in the array."
];*/

/*const wordsArray = textArray.map(function(sentence){
  
  sentence.split(' ')
  
  return sentence.toUpperCase()
  
  
  })
  wordsArray;
console.log(wordsArray);*/

//const titleWords = wordsArray.map(function (title) {
   
   //return title
  
//})
//console.log(titleWords)


/*function toTitleCase(str) {
  return str
    //.toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

//const formattedTutorials = tutorials.map(title => toTitleCase(title));
//console.log(formattedTutorials);

console.log(toTitleCase(str))*/


// Step 1: Define a callback function to convert a single title to title case
/*function formatTitleCase(title) {
  // Convert the title to lowercase, split it into words, and capitalize the first letter of each word
  return (title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
}

// Step 2: Use the map() method to apply the callback function to each title
const titleCased = tutorials.map(formatTitleCase);

console.log(titleCased);*/