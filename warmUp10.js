// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************
function gcd(n ,m){
if((n/m) === 1){
return n + ' is the gcd'
}
else if (n > m) 
   return gcd(n-m, m); 
   return gcd(n, m-n); 
}
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

//with recursion, i'm adding to m '1' and decreasing n with '1'
function sum(n, m){
	if(n === 0){
		return m
	}
	else if(m === 0){
		return n
	}
	else if(n > 0){
		return sum(n - 1,m+1) 
	}
}