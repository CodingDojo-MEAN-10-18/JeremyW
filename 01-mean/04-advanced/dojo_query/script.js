const $Dojo = function(elementId){
    // return immediate function
    return (function($dojo){
        // get DOM object with id
        $dojo.someId = document.getElementById(elementId);

        // use callback when the element is clicked
        $dojo.click = function (callback){
            this.someId = addEventListener('click', callback);
        };

        // use callback function when hovering in or out
        $dojo.hover = function(hoverin, hoverout){
            this.someId.addEventListener('mouseover', hoverin);
            this.someId.addEventListener('mouseout', hoverout);
        };

        // return the element
        return $dojo;
    })({});
};