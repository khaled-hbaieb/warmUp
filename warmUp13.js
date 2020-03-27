// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n
//starting from 0, e.g.:
// mult(3); // => 6
// mult(4); // => 24
// to compute the multiplication of all integers up to n, we need to set a variable i to decrement (or increment from 1 till it reaches n) till it reaches 1 
function mult (n){
	var result = 1
	if(n === 0){
		return 0
	}
	for(var i =  n; i > 0; i--){
		result *= i
	}
	return result
}
// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number.
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...
// in order to separate the number 1 through n, i needed a new variable that i called 'repeat' which is equal to 'i' and made the result ==> result = result + repete + i
function numbers (n){
var result = '1'
var i = 2
while (i <= n){
    var repete = i
	result = result + repete + i
i++
}
return result
}
