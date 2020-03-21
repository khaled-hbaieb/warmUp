// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']

// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]


//1
var object = {
	name: 'ahmed',
	age: 20
}


function objKey (obj) {
	var arr = [];
	for (var value in obj){
		arr.push(obj[value])
	}
	return arr
}

//2

function  objLength (obj) {
	var arr = [];
	for (var key in obj){
		arr.push(obj[key])
	}
return arr.length
}

//3
function objSort (arrOfObj) {
var minID = arrOfObj[0].id	
var result = [];
	for (var i = 0; i < arrOfObj.length; i++){
		if(arrOfObj[i].id < minID){
			result.push(arrOfObj[i])
		}
	}
	return result
}