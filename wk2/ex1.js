function compareNumToTen(num){
    return new Promise((resolve, reject) => {
        if (num < 10){
            reject(`${num} is less than 10, error`)
        } 
        if(num > 10){
            resolve(`${num} is greater than 10, success`)
        }
    })
}

compareNumToTen(11).then(result => console.log(result))
compareNumToTen(9).catch(error => console.log(error))