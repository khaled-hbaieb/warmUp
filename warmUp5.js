// 1) Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// ex greaterNum(5, 10) => "The greater number of 5 and 10 is 10."
<<<<<<< HEAD
function greaterNum (x, y) {
	if (x > y) {
		return  "The greater number of " + x + " and " + y + " is " + x
	}
	else if (x < y) {
		return "The greater number of " + x + " and " + y + " is " + y
	}
	else if (x === y) {
		return "Both numbers are equal"
	}
	return "Please put Numbers"
}
=======


>>>>>>> 542e878735fb7d381c1d2089efdfe92c5a97bbd6
// 2) Write a function named isEven using  for loop that
// -  iterate from x to y.
// -  return array contain the even values,
//  ex:  isEven(1,10) => [2,4,6,8,10]

<<<<<<< HEAD
 function isEven(x, y) {
var result = []
if(x < y){	
for (var i = x; i <= y ;i++) {
		if ((i % 2) === 0 ) {
			result.push(i)
  }		
 }
}
else if(x > y){	
for (var i = y; i <= x ;i++) {
		if ((i % 2) === 0 ) {
			result.push(i)
  }		
 }
}
else if(x === y && (x % 2) === 0){
	return [x]
}

	return result
}
=======
>>>>>>> 542e878735fb7d381c1d2089efdfe92c5a97bbd6
//3) write a function named sum that
// - Use a while loop to add up the numbers from x to y.
// ex sum(1,5) => 15
function sum (x, y) {
	var result = 0
	var i = x
	while (i <= y ) {
		result += i
		i++
	}
	return result
}


//4) Write a function named factorial that
// -  Use Recursion to calculate the factorial of a number
// -  the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n
// - 5! = 5*4*3*2*1 = 120
// ex : factorial(5) => 120
 function factorial (n) {
 	if (n === 0 || n === 1) {
 		return 1
 	}
 	return n * factorial(n-1)
 }

//5) write a function named decimals
//- the function will format a number up to specified decimal places
//- the function will return a string
//- if the parameters not a number return false
// ex :
//      decimals(2100, 'a') ==> false
//      decimals('a', 5) ==> false
//      decimals(2.100212, 2) ==> '2.10'
//      decimals(2.100212, 3) ==> '2.100'
//      decimals(2100, 2) ==> '2100.00'
//
function decimals(x, y){
var result = x
if(isNaN(x) || isNaN(y)){
	return false
}
else if(y === 0) {
	return x 
	}
	return parseFloat(x).toFixed(y);
}     