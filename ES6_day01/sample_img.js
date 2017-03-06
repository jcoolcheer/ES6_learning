function loadImg(){
    return new Promise((resoleve,reject) => {
        let img = new Image()
        img.onload = function(){
            resoleve(image)
        }

        image.onerror = function(){
            reject(new Error('Could noe load image  at: '+URL
            ))
        }
    })
}
