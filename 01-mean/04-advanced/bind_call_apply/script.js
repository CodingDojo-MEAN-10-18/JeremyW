$(document).ready(function(){
    // our test object
    var customObject = {
        name:'California, Eureka',
        onClick:function(myParameter){
        console.log("I've been clicked");
        console.log(myParameter, "I've been passed by bind");
        console.log(this.name);
        }
    }
    // our behavior on click.
    $('button').click(customObject.onClick.bind(customObject,"Bind this argument!"));

    function Ninja(name, age){
        this.name = name;
        this.age = age;
        // there could be lots of other stuff here!
    }
    function BlackBelt(name, age){
        // commas!
        Ninja.call(this,name,age);
        this.belt = 'black';
    }
    function YellowBelt(name, age){
        // array
        Ninja.apply(this,[name, age]);
        this.belt = 'yellow';
    }
    var yellow_belt = new YellowBelt('Jeremy', 43);
    var black_belt = new BlackBelt('Alex', 17);
    console.log(yellow_belt.name);
    console.log(black_belt.name);

    function levelUp() {
        console.log(this.name + " has learned a new kata, in " + this.gender + " favorite language: " + this.language);
    }
    var person = {
        name: 'Anika',
        gender: 'her',
        language: 'JavaScript!'
    };
    // console.log(person);
    levelUp.call(person);
});