module.exports = function (){
    return {
        add: function(num1, num2) { 
           // add code here
           return num1 + num2;
        },
        multiply: function(num1, num2) {
            // add code here 
            return num1 * num2;
        },
        square: function(num) {
            // add code here 
            return num * num;
        },
        //Get a random number within a range; num1 = min, num2 = max
        random: function(num1, num2) {
            // add code here
            return (Math.floor(Math.random() * num2) + 1);
        }
    }
};
  