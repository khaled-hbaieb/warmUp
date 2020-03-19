// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// 1-Define a function called myTrueFun that returns true whenever its called.

// 2- Define a function called color in which returns true if type of the input is string and returns false otherwise.

// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.

// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not


//1 ==> this function does not need any parameters, so whenever it is called, it needs to 'return true'.

function myTrueFun () {

	return true
}

//2 ==> a way to check if the input is a string or not, is by calculating its length, if it's a string, the result is a number, else undefined.

function color (string){
	if (string.length !== undefined) {
		return true
	}
	return false
}

//3 ==> '2' is the only even prime number, so if n % i is equal equal to zero then it is not a prime number
// and prime numbers only start above the number '1' so if n is inferieur or equal to 1 then it's not a prime number 
function primeOrNot (n) {  
if (n <= 1) { 
  return 'Not a prime number!'; 
}      
for (var i = 2; i < n; i++){ 
  if (n % i == 0) 
    return 'Not a prime number!'; 
   }     
        return n +' is a prime number!'; 
}

//4 ==> first we need to check if the parameters are numbers or not, then we need the '==' sign to check for the value
function sameValues (num1, num2){
	if(isNaN(num1)|| isNaN(num2)){
		return false
	}

	else if (num1 == num2 ){
		return true
	}
	return false
	}
