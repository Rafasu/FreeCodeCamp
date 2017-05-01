//Return largest in Arrays.

function largestOfFour(arr) {
  // You can do this!
  var largest = [] ;
  var max = 0 ;
  
  for(var i = 0; i < 4 ; i++){
    for(var j  = 0 ; j < arr[i].length; j++ ){
      if(arr[i][j] > max){
        max = arr[i][j] ;
      }
    }
    largest.push(max) ;
    max = 0 ;
  }
  
  return largest;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) ;
