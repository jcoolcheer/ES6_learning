function timeout(ms){
    return new Promise((resolve,reject) => {
        setTimeout(resolve,ms,'Promise function is running...')
    })
}

timeout(100).then((value) => {
    console.log(value)
})

console.log('done')
// done
// Promise function is running...

let promise  = new Promise((resolve,reject) => {
    console.log('i am running immediately')
    resolve()
})

promise.then(() => {
    console.log('i am a promise function')
})

