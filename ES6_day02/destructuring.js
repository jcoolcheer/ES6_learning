let [foo,[[bar],baz]] = [1,[[4],5]]
console.log(foo,bar,baz)
// 1,4,5


let [,,third] = [1,2,[1,2,3]]
console.log(third)
// [1,2,3]

// function* fibs(){
// 	let a = 0,
// 		b = 1
// 	while (true){
// 		yield a;
// 		[a,b] = [b,a+b]
// 	}
// }

// var [first,second,third,forth,sixth] = fibs()
// console.log(fibs)
// console.log(sixth)

{ blowUp }  = { blowUp: 10 }
blowUp //10

let [missing = true] = []
console.log(missing)
// true

let { message: msg = 'something went wrong' } = {}
console.log(msg)
//something went wrong

let { x = 3 } = {}
console.log(x)
// 3

