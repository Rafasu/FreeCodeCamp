function reverseString(str){
	if(str.length == 0){
		return str ;
	}

	var reverse = "" ;
	for(var i = str.length - 1 ; i >= 0 ;i-- ){
		reverse += str[i] ;
	}
	return reverse ;
}

reverseString("hello") ;
