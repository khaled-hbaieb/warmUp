// 1 - Complete the function cube that returns the cube of x:

function cube(x) {
  return x*x*x
}

// 2 - Write a function sameLength that accepts two strings as arguments, and returns true if those strings have the same length, and false otherwise.

function sameLength(string1, string2) {
  var length1= string1.length
  var length2= string2.length
  if(length1===length2){
  	return true
  }
  return false
}

// 3 - Write a function called scoreToGrade that accepts a number as a parameter and returns a string representing a letter grade corresponding to that score.

function scoreToGrade(number) {
  if(number>=90){
	return 'A'}
	else if(80<=number&&number<=89){
			return 'B'
		}
	else if (70<=number&&number<=79){
			return 'C'
		}
	else if (60<=number&&number<=69){
			return 'D'
		}
	else { return 'F';
		}
	}
// USE RECURSION
// Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string str should be repeated
// repeatString('dog', 0); // => ''
// repeatString('dog', 1); // => 'dog'
// repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog'
// repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'

function repeatString(str, count) {
  var result = ''
  if(count>0){
  result= str+ repeatString(str,count-1)
  count= count-1
 } 
 return result
}
