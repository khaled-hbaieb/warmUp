// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false
// javaScript has a built in function to determin if an input is an array or not
function isArray(arr) {
	return Array.isArray(arr)
}
// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4],2)=>[1,2]
// in this exercise, the variable i must be less than n in order to achieve our goal
function first (arr, n) {
	var result = [];
	for (var i = 0; i < n; i++){
		result.push(arr[i])
	}
	return result;
}
// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]
function convert (obj) {
  var result = []
  for (let [key, value] of Object.entries(obj)){
  	return object.entries(obj)
  }
  }


// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************
