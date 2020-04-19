const fs = require('fs')
const path = require('path')

const fPath = (__dirname + '\\logs')

// creating logs
const crLogs = function(fPath) {
    if (!fs.existsSync(fPath)){
        fs.mkdir(fPath, { recursive: true }, (err) => {
            if (err) throw err;
            console.log('logs folder created.')
        })
    }
    for (let i = 1; i < 11; i++){
        tempPath = fPath + "Log" + i + ".txt"
        fs.writeFile(tempPath, "some sample data. ", (err) => {
            if (err) throw err;
            console.log(tempPath + "was created. ")
        } )
    }
}

// removing logs
const rmLogs = function(fPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(fPath, function(err,files) {
            files.forEach( function (file) {
                tempDir = fPath + file

                fs.unlink(tempDir, function (err) {
                    if (err) reject(err)

                    console.log('deleting files ... ' + file);
                });

                fs.rmdir(fPath, function(err) {
                    if (err) reject(err)
                })
                resolve("logs directory removed")
            })
        }) 
    });
}