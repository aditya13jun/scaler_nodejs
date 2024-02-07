//files
const fs = require('fs')

//reading a file 
let fileContent = fs.readFileSync('f1.txt')
console.log('OUTPUT: '+ fileContent)

//writing inside a file
fs.writeFileSync('f2.txt', 'Updated Data')  //date overwritten
console.log('File Overwritten!!')  //creates a new file if file not exists


//append a file
fs.appendFileSync('f3.txt', 'Appended Data ')  //data updated
console.log('f3 file appended')

//deleting a file
fs.unlinkSync('f2.txt')  //file deleted
console.log('File Deleted!')