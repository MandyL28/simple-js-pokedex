 
/*
//First part of assignment!!

let pokemonList = [ //instead of personAge, it is now pokemonList
	{name: 'Pikachu', height: 2, type: 'electric'},//instead of ages, now it is height and type (need array for type?)
	{name: 'Bulbasaur', height: 6, type: 'plant'}, 
	{name: 'Charizard', height: 12, type: 'Fire'} 
    ];
    
 for (let i=0; 1 <pokemonList.length; i++){  //now, how to adjust it for height or type vs age???
    if (pokemonList[i].height <=6 && pokemonList[i].height >5){
       document.write(pokemonList[i].name + " is 6ft" + " - that is short but managable. " + "");
    }else if (pokemonList[i].height <3){
     document.write(pokemonList[i].name + " is 2ft " + " - that's super short! "); 
    }else {
        document.write(pokemonList[i].name + " is 12ft" + " - that is tall!");
    } 
 }
*/


/*
//SECOND part of assignment!!!

let pokemonList = [     // Pokémon objects
  {name: 'Pikachu', height: 2, type: 'electric'},
  {name: 'Bulbasaur', height: 6, type: 'plant'}, 
  {name: 'Charizard', height: 12, type: 'Fire'} 
];
document.write(pokemonList);
let pokemonList2 = [     // different set of Pokémon objects
  {name: 'Pichu', height: 2, type: 'electric'},
  {name: 'Mewtwo', height: 7, type: 'psychic'}, 
  {name: 'Meowth', height: 5, type: 'feline'} 	
	
];

function printArrayDetails(pokemonList){
  for (let i = 0; i <pokemonList.length; i++){
     document.write(list[i].name);
    // printing list[i] details
    
  }
}
*/

//printArrayDetails(pokemonList); // executes the function using 'pokemonList' as its input
//printArrayDetails(pokemonList2); // executes the function using 'pokemonList2' as its input


//THIRD PART OF ASSIGNMENT
/*
var pokemonRepository = (function () {
   var pokemonList = [
	{
      name: 'Pikachu', 
      height: 2, 
      types: ['electric', 'shock']
    },
	{
      name: 'Bulbasaur', 
      height: 6, 
      type: ['grass', 'poison']
    }, 
	{
      name: 'Charizard', 
      height: 12, 
      type: ['fire', 'flying']
      
     } 
   ];

 function getAll() {
   return pokemonList;

 }
 
  function add(pokemon) {
    pokemonList.push(pokemon);

  }

  return {
    add: add,
    getAll: getAll
  };
})();

console.log(pokemonRepository.getAll() );

*/


//---------------

/*
//THIS IS GOOD START HERRREEEEE
var pokemonList = [   
  {
    name: 'Pikachu',
    height: 2, 
    type: 'electric'
  },
  {
    name: 'Bulbasaur', 
    height: 6, 
    type: 'plant'
  },
  {
    name: 'Charizard', 
    height: 12, 
    type: 'fire'
  }

]

document.write(pokemonList[0].name)
document.write(", ")
document.write(pokemonList[1].name)
document.write(",")
document.write(pokemonList[2].name)
  
*/

//OK, SO NOWWW......
var pokemonList = [   
  {
    name: 'Pikachu',
    height: 2, 
    type: 'electric'
  },
  {
    name: 'Bulbasaur', 
    height: 6, 
    type: 'plant'
  },
  {
    name: 'Charizard', 
    height: 12, 
    type: 'fire'
  }

]

for (let i=0; 1 <pokemonList.length; i++){  //now, how to adjust it for height or type vs age???
      if (pokemonList[i].height <=6 && pokemonList[i].height >5){
         document.write(pokemonList[i].name + " is 6ft" + " - that's standard. " + "");
      }else if (pokemonList[i].height <3){
       document.write(pokemonList[i].name + " is 2ft " + " - that's super short! "); 
      }else {
          document.write(pokemonList[i].name + " is 12ft" + " - that is tall!");
      } 
   }