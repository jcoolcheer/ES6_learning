function containsAll_es5(hayStack){
	for (var i =1; i < arguments.length; i++){
		if (hayStack.indexOf(arguments[i]) === -1){
			return false
		}
	}
	return true
}// method in ES5

containsAll_es5('banana','b','na') //true
containsAll_es5('banana','c','na') //true


// -----------------I am devide line------------------------

function containsAll_es6(hayStack,...strs){
	for (var key of strs){
		if (hayStack.indexOf(key) === -1){
			return false
		}
	}
	return true
}
containsAll_es6('banana','b','na') //true
containsAll_es6('banana','c','na') //false
console.log('asdfasfd')