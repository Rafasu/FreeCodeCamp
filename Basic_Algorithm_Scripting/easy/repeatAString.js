/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

//Repeat a string repeat a string.
function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeat = '' ;
  //If num is 0, return an empty string.
  if(num === 0 ){
    return repeat ;
  }
  while(num > 0){
    repeat += str ;
    num-- ;
  }
  return repeat;
}

repeatStringNumTimes("abc", 3);
