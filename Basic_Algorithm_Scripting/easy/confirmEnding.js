//Confirm the ending
/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var compare = '' ;
  
  for(var i = str.length -1 ; i >= 0 ; i--){
    compare = str.substring(i, str.length) ;
    if(compare === target){
      return true ;
    }
    //Exits the cycle after readign all the last word.
    if(str[i] === ' '){
      break ;
    }
  }
 
  //If the target was not on the last word, return false.
  return false;
}

confirmEnding("Bastian", "n");

