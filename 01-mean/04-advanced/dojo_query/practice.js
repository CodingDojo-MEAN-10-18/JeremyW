// Assignment - DojoQuery
// Reviewing JQuery’s code, we see that they use Immediate functions.

// Our assignment is to create our own DojoQuery library that exposes $Dojo to the global namespace. 
// Let’s go over the functionality that $Dojo should have:

// The ability to click on an HTML element with a specific id.
// The ability to hover on an HTML element with a specific id.
// Make sure you wrap your code in an immediate function

const $Dojo = function(elementId){
    // return an immediate function
    return (function($dojo){
        // get the DOM object with id
        $dojo.someId = document.getElementById(elementId);

        // use callback when the element is clicked
        $dojo.click = function (callback){
            this.someId = addEventListener('click', callback);
        };

        // use callback function when hovering in or out
        $dojo.hover = function (hoverin, hoverout){
            this.someId = addEventListener('mouseover', hoverin);
            this.someId = addEventListener('mouseout', hoverout);
        };

        // return the element
        return $dojo
    })({});
};