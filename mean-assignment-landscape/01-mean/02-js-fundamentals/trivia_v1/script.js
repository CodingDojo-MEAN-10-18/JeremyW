// Assignment: Trivia Night
// Objectives:
// 1. Manipulate the DOM based on data received from an API.
// 2. Manipulate the DOM based on user interaction.
$(document).ready(function() {
    let categoryIDs = {
        'Entertainment: Video Games': 'games',
        'History': 'history',
        'Science & Nature': 'science'
    };
    const amount = 3;  // single question returned
    const type = 'multiple';
    const category = 15;   // 22 is category for video games (entertainment)
    const baseUrl = 'https://opentdb.com/api.php?amount=' + amount + '&category=' + category + '&type=' + type;
    $.get(baseUrl, function(response){
        for(let index = 0; index < response.results.length; index++){
            const result = response.results[index];
            const html = buildHTML(result);
            const score = buildScoreHTML(index);
            console.log(result);
            const elementID = categoryIDs[result.category];
            console.log(elementID);
            console.log(buildDisplayHTML(score, html));
            const element = document.getElementById(elementID);
            
            let allAnswers = [
                result.correct_answer,
                result.incorrect_answers
            ];
            let newAnswersArray = [].concat.apply(allAnswers);
            if(newAnswersArray instanceof Array){
                console.log('This is an array');
            }
            console.log('Here is the new answer array:' + newAnswersArray);
            console.log('Type:' + typeof newAnswersArray);
            for(var i = 0; i < allAnswers.length; i++){
                newAnswersArray.push(allAnswers[i]);
                console.log("Answers inside for loop: " + allAnswers[i]);
                return newAnswersArray;
            }
            element.innerHTML += buildDisplayHTML(score, html);
        }
    }, 'json')
    .done(function() {
        console.log(`The done() function ran here.`)
    });

    function buildHTML(question){
        // populate the html string with the question information
        let htmlStr = `<div class="hidden" data-id="${question.category}">${question.question}<span class="answers">all answers variable will go here</div>`;
        return htmlStr;
    }
    function buildDisplayHTML(score, question){
        let scoreDisplayHtml = `<div class="question">${score} ${question}</div>`;
        return scoreDisplayHtml;
    }
    function buildScore(value){
        return (value + 1) *100;
    }
    function buildScoreHTML(value) {
    let scoreHtml = `<div class="difficulty${buildScore(value)}">${buildScore(value)}</div>`;
        return scoreHtml;
    }
    // if the div is clicked, show question information
    $('#games').on('click', function(){
    // $('.question').click( function (event) {
        // to do this, we need to send another request to the API.
        let id = $(this).attr('data-id');
        console.log(this);
        console.log('A click is happening here.')
        // $('div.question').children().toggle();
        $('.difficulty100').next().toggle();
        // $('.question:first-child').hide();
        $('.question:first-child').show().css('background-color', 'yellow');
        //  $('.difficulty200').hide().next().show();
        // $('.difficulty300').hide().next().show();
        // $('.difficulty100').show().next().hide();
        // $('div').removeAttr('hidden');
        // $('div.hidden').first().attr('class', 'show');
    });
    // if the div is clicked, show question information
    $('div.difficulty200').on('click', function() {
        console.log(this);
        console.log('A click is happening here.')
        $('.difficulty200').hide().next().show();
        event.preventDefault();
    });
    // if the div is clicked, show question information
    $('div.difficulty300').on('click', function() {
        console.log(this);
        console.log('A click is happening here.')
        $('.difficulty300').hide().next().show();
        event.preventDefault();
    });
});

["Rhyhorn", ["Bulbasaur", "Mew", "Arceus"]]
