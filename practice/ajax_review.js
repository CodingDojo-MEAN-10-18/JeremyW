// assuming you have jQuery
$(document).ready(function(){
    var favoritePokemon;
    // the given link is for Bulbasaur's information
    // const baseUrl = 'https://pokeapi.co/api/v2/pokemon/1/';
    const id_array = [1,2,3,4,5];

    for(let index = 0; index < id_array.length; index++){
        let baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
        let pokemon_id = id_array[index];
        // console.log(`Here is the pokemon ID from the array: ${pokemon_id}`);
        baseUrl = baseUrl + pokemon_id + '/';
        // console.log(`Here is the baseUrl var through each iteration: ${baseUrl}`);
        // setTimeout(() => {
            $.get(baseUrl, (data) => {
                console.log("Here is the pokemon ID from the array: ", pokemon_id);
                favoritePokemon = data.name;
                console.log("Got my favorite Pokemon", favoritePokemon);      // Predict the output!
            });
        // }, 50);
    }
});
