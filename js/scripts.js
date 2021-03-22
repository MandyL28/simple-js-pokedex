

let pokemonList = [ //instead of personAge, it is now pokemonList
	{name: 'Pikachu', height: 2, type: 'electric'},//instead of ages, now it is height and type (need array for type?)
	{name: 'Bulbasaur', height: 6, type: 'plant'}, 
	{name: 'Charizard', height: 12, type: 'Fire'} 
    ];
    
 /*for (let i=0; 1 <pokemonList.length; i++){  //now, how to adjust it for height or type vs age???
    if (pokemonList[i].height <=6 && pokemonList[i].height >5){
       document.write(pokemonList[i].name + " is 6ft" + " - that is short but managable");
	document.write(br/);
    }else if (pokemonList[i].height <3){
     document.write(pokemonList[i].name + " is 2ft " + " - that's super short"); 
    }else {
        documetn.write(pokemonList[i].name + " is 12ft" + " - that is tall!");
    } */
 }

	 
let pokemonList = [     // Pokémon objects
  {name: 'Pikachu', height: 2, type: 'electric'},
  {name: 'Bulbasaur', height: 6, type: 'plant'}, 
  {name: 'Charizard', height: 12, type: 'Fire'} 
];

let pokemonList2 = [     // different set of Pokémon objects
  {name: 'Pichu', height: 2, type: 'electric'},
  {name: 'Mewtwo', height: 7, type: 'plant'}, 
  {name: 'Meowth', height: 5, type: 'Fire'} 	
	
];

function printArrayDetails(list){
  for (let i = 0; i < list.length; i++){
    // document.write("<p>" + list[i].name + "</p>");
    // printing list[i]’s other details
    // ...
  }
}

printArrayDetails(pokemonList); // executes the function using ‘pokemonList‘ as its input

printArrayDetails(pokemonList2); // executes the function using ‘pokemonList2‘ as its input
