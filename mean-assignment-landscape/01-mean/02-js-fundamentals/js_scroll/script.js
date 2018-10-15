// Assignment: JavaScript Scroll
// Objectives: Fix the following runtime errors from the example code:
// The last character of each string in the words array doesn't show up.
// The blank spaces are not appearing correctly. The cursor does not correctly shift to the right on blank spaces, 
// instead it pauses on the previous letter and jumps to the next letter.

const words = ["a lot of fun", "about not giving up", "challenging and empowering", "creative expression", "what I learned at CodingDojo!"];
const el = document.getElementById('magic');
let word_counter = 0;
let character_counter = 0;

function updateText(){
    // account for spaces...
    var char = words[word_counter][character_counter]; // declare variable that represents the characters
    if (char === " ") {  //  check for spaces
        char = "&nbsp;";  //  convert space to &nbsp;
    }
    character_counter++;  //  increment the count by 1
    el.innerHTML += char; //Add character to current string
    // original code commented out below
    // el.innerHTML = el.innerHTML + words[word_counter][character_counter++];
    if(character_counter == words[word_counter].length + 1){ // added '+ 1' to words[word_counter].length to catch the last char in each array element
        //choose a different word
        word_counter++;
        //start over with the first character of the word
        character_counter = 0;
        //set the html to be blank
        el.innerHTML = ' ';
        // if we're displaying the last word, go back to the first word
        if(word_counter == words.length){
            word_counter = 0;
        }
    }
}
setInterval(updateText,300);