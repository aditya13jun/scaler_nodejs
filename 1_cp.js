//child process is a node module used to create sub process within a script.
//you can perform different tasks with your script by just using some mathods.


const cp = require('child_process')

//cp.execSync('calc')  // opens Calculator

//cp.execSync('start chrome https://nodejs.org/docs/latest/api/child_process.html')  //opens chrome browser with link provided

console.log('output: ' + cp.execSync('node demo.js'))  //executes Different file

