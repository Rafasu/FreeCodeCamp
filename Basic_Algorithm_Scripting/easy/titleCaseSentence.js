//Title Case Sentence.

function titleCase(str) {
  var upper = false ;
  var charStr = '' ;
  
  charStr = str.split('');
  
  //Traverse the array to convert all letters to lowercase.
  for(var i = 0 ; i < charStr.length ; i++ ){
   charStr[i] = charStr[i].toLowerCase() ;  
  }
  
  //Convert the first letter uppercase.
  charStr[0] = charStr[0].toUpperCase() ;
  
  //Conver the first letter of each word to uppercase.
  for(i = 1 ; i < charStr.length ; i++){
     if(charStr[i] === ' ' ){
       upper = true ;
     }
    else if(upper){
      charStr[i] = charStr[i].toUpperCase() ;
      upper =  false ;
    }
  }
  
  //Join the array.
  charStr = charStr.join('') ;
  return charStr;
}

titleCase("I'm a little tea pot");
