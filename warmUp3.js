// 1 - Write functions larger and smaller that each accept two strings as arguments, and return the larger and smaller strings, respectively

// 2 - Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:
// function counting(n) {
// TODO: your code here
// }
// counting(5); // => '1, 2, 3, 4, 5'
// counting(1); // => '1'
// counting(3); // => '1, 2, 3'

// 3 -  Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5
// welcome 1
//  welcome 2, meet 1
//  welcome 3, meet 1 and 2
//  welcome 4, meet 1, 2 and 3
//  welcome 5, meet 1, 2, 3 and 4
//

// 4- Write a function shortestWord that works like longestWord, but returns the shortest word instead.
<<<<<<< HEAD

//1
function comparaison (string1, string2) {
	if(string1.length=== string2.length){
		return 'The two strings have the same length'
	}
	else if (string1.length>string2.length){
		return string1 +' is larger than ' + string2
	}
	else if(string1.length< string2.length){
		return string1 +' is smaller than ' + string2
	}
}

//2
function counting(n) {
	return n+1
}

//3
function meetAndGreet(n) {
	
}



//4

function shortestWord(string){ 
 	 var strAr=string.split(' '); 
 	 var shortest=strAr[0]; 
 	 for (var i=0; i<strAr.length; i++){ 
 	 	 if(shortest.length > strAr[i].length){ 
 	 	 	 shortest=strAr[i]; 
 	 	 } 
 	} 
 	 return shortest; 
 }
=======
>>>>>>> 4ab3967cd0764bea1a7614a1d87ac2da4d6ea391
