
//creating a directory
const fs = require('fs')

// fs.mkdirSync('myDirectory')
// fs.mkdirSync('myDirectory2')

//checking the content of the directory
let folderPath = 'C:\\Users\\Aditya Harsh\\OneDrive\\Desktop\\codes\\Scaler Node Js Course\\myDirectory'
let folderContent = fs.readdirSync(folderPath)

console.log("Folder Content: " , folderContent)  //inside an array


//checking the existance of a directory
let doesExists = fs.existsSync('1_cp.js')
console.log(doesExists)


//remove a directory
fs.rmdirSync('myDirectory2')
console.log('File has been Deleted!!')