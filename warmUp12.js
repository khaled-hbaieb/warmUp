// 1-Write a function that takes a string as an input and returns the reverse of each letter
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o0l1l2e3h4"
function reverseStr (str) {
var result = (str[str.length - 1]) + 0;
var j = 1 
var i = str.length - 2
 while(i >= 0 && j < str.length){
 	result = result + str[i] + j
i--
j++ 
}
 return result;
} 
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameLength (arr) {	
var result = [arr[0]];
	var i = 0
var j = arr.length -1
	while( i < arr.length && j >= 0 && j>i) {
		if(arr[i].length === arr[j].length){
			result.push(arr[j])
			
		}
j--

	}
	return result
}