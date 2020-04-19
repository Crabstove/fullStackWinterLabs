function makeUpperCase(wordsArr){
        return new Promise((resolve, reject) => {    
        for (let i = 0, x = wordsArr.length; i < x; i++) {
            if (typeof wordsArr[i] === 'string'){
                wordsArr[i] = wordsArr[i][0].toUpperCase() + wordsArr[i].substr(1);
            }
            else{
                reject("Error: Not all items in the array are strings")
            }
        }
        resolve(wordsArr)
    })
}

function sortWords(wordsArr){
    wordsArr.sort((a, b) => a.localeCompare(b))
}

const arrayOfNames = ['jaxx', 'tiny', 'clay']
const mixedArray = ['anarchy', 99, true]

makeUpperCase(arrayOfNames)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch(error => console.log(error))

makeUpperCase(mixedArray)  
  .then(sortWords)
  .then((result) => console.log(result))
  .catch(error => console.log(error))
  