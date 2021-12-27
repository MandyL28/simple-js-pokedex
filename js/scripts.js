let pokemonList = [     // Pokémon objects
  {name: 'Pikachu', height: 2, type: 'electric'},
  {name: 'Bulbasaur', height: 6, type: 'plant'}, 
  {name: 'Charizard', height: 12, type: 'Fire'} 
];
let pokemonList2 = [     // different set of Pokémon objects
  {name: 'Pichu', height: 2, type: 'electric'},
  {name: 'Mewtwo', height: 7, type: 'psychic'}, 
  {name: 'Meowth', height: 5, type: 'feline'}   
  
];
function printArrayDetails(pokemonList){
  for (let i = 0; i < pokemonList.length; i++){
     document.write("<p>" + pokemonList[i].name + " is " + " ");
     document.write(pokemonList[i].height + 'ft.' + " and is type: " + pokemonList[i].type);
  }
}
printArrayDetails(pokemonList); // executes the function using ‘pokemonList‘ as its input
printArrayDetails(pokemonList2); // executes the function using ‘pokemonList2‘ as its input. Oops - replace list[i].name with pokemonList[i].name and add pokemonList[i].height, too. 