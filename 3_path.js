const path = require('path')

let ext = path.extname('C:\\Users\\Aditya Harsh\\OneDrive\\Desktop\\codes\\Scaler Node Js Course\\f1.txt')  //Tells the extension name of the file
console.log(ext)

let baseName = path.basename('C:\\Users\\Aditya Harsh\\OneDrive\\Desktop\\codes\\Scaler Node Js Course\\f1.txt')  //Tells the file name
console.log(baseName)

console.log(__filename) //file name
console.log(__dirname) //directort name