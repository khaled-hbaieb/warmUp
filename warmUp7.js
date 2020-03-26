// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
<<<<<<< HEAD
//answer :    5 < 7
=======
//answer : 5 < 7 ? true : false;
>>>>>>> 542e878735fb7d381c1d2089efdfe92c5a97bbd6

//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World'


//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
<<<<<<< HEAD
<<<<<<< HEAD

//2
function helloWorld(language) {
	if (language === "fr") {
		return 'Bonjour tout le monde'
	}
	else if (language === "es") {
		return 'Hola, Mundo'
	}
	return 'Hello, World'
}

//3
function reverseArray(arr) {
	var result = []
	for ( var i = arr.length - 1; i >= 0; i-- ){
			result.push(arr[i]) 
	}
	return result
}
=======
var reverse = arr => {
  var result = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
};
>>>>>>> 542e878735fb7d381c1d2089efdfe92c5a97bbd6
=======
>>>>>>> 61b0662bb14ae4fe1668c5e0f12461a2bba0362d
