var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];

function dwarfRollCall(dwarves) {
  var array =[];
   for (var i=0;i<dwarves.length;i++){
     array.push(`${i+1}. ${dwarves[i]} `)
   }
   array.splice(dwarves.length/2, dwarves.length/2);
    return array.join(',');
}

var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];

function summonCaptainPlanet(planeteerCalls){
 return planeteerCalls.map(x => x.toUpperCase()+"!") 
}


function longPlaneteerCalls(words) {
  for (var i=0; i<words.length;i++){
  if (words[i].length>4){
    return true;
  } else{
    return false;
  }
  }
}


function findTheCheese (foods) {
  for (var i=0; i<foods.length;i++){
  if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i]=== "camembert"){
    return foods[i];}
  } 
    return "no cheese!";
  }
  
  var words = ['banana', 'boy', 'apple'];
  
  function wordsWithB(words){
    var array =[];
    for (var i=0; i<words.length; i++){
      if (words[i][0] === 'b'){
        array.push(words[i]);
      }
    }
    return array;
  }
