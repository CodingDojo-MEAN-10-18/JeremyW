// Assignment: AJAX Review
// Objectives:
// 1.  Review AJAX and identify the callback and the asynchronous code in a typical AJAX request.
// 2.  Understand why callbacks are used.
// 3.  Explore the roles of the call stack, task queue, and event loop to better understand how we should approach asynchronous code.

$(document).ready(function () {
    var favoritePokemon;
    // the given link is for Bulbasaur's information
    $.get("https://pokeapi.co/api/v2/pokemon/1/", function (data) {
        favoritePokemon = data.name;
    });
    console.log("Got my favorite Pokemon", favoritePokemon);      // Predict the output!
});
