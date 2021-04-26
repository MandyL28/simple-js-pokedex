

/*
    //PART 1

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

    //And then:


/*
let pokemonList = [ 
	{name: 'Pikachu', height: 2, type: 'electric'},       //instead of ages, now it is height and type (need array for type?)
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
    };
 }
*/



//OK, so now printing 2 arrays


let pokemonList = [   
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

];

function printArrayDetails(pokemonList){ 
  for (let i = 0; i < pokemonList.length; i++){
      document.write("<p>" + pokemonList[i].name + "</p>"); 
     // printing pokemonList[i]'s other details // ... 
    } 
  }

  
let pokemonList2 = [    
  {name: 'Pichu', height: 2, type: 'electric'},
  {name: 'Mewtwo', height: 7, type: 'psychic'}, 
  {name: 'Meowth', height: 5, type: 'feline'} 	
	
];

function printArrayDetails(pokemonList2){
  for (let i = 0; i <pokemonList2.length; i++){
     document.write(list[i].name);
    // printing list[i] details
    
  }
}


  

