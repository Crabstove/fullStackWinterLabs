const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        let newArr = []
        for (let i = 0; i < arr.length; i++) {
            if (typeof(arr[i]) == 'string') {
                newArr.push(arr[i].toLowerCase())
            }
        }
        if (newArr.length != 0) {
            resolve(newArr)
        } else {
            reject('error')
        }
    })
}
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));