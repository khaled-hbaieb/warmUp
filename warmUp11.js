// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors
var nameOfFemales = ['Nour', 'Ranoua', 'Reem', 'Khaoula', 'Emna'];
var nameOfMales = ['Hamza', 'sami', 'Moez', 'Ahmed', 'Adam'];
var classInstructors = ['Seif', 'Omar', 'Dhia', 'Farouk', 'Houda'];
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middleArr(arr){
	for(var i = 0; i < arr.length; i++){
		if(i === (arr.length-1)/2){
			return arr[i]
		}
		else if (i === (arr.length)/2){
			return arr[i]
	}
}
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.

function multiplyByTwo (arr){	
for(var i = 0; i < arr.length; i++){
		if((i % 2) === 0){
			arr[i] = arr[i] * 2;
		}
	}
return arr	
}