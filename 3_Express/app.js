const express = require('express')

const app = express()
const courses = [
    {id:1, name:'Javascript'},
    {id:2, name:'Java'},
    {id:3, name:'Python'}
]

app.get('/' , (req, res)=>{
    res.send('Hello from Scaler Topics!!')
})

app.get('/about', (req, res)=>{
    res.send('We Create Impact!!')
})

app.get('/contact', (req, res)=>{
    res.send('Comtact us here!!')
})

//Route parameters 
app.get('/courses/:coursename', (req ,res)=>{
    console.log(req.params.coursename)
    let course = courses.find(course => course.name === req.params.coursename)
    if(!course) res.status(404).send('The course you are looking for does not exists!!')
    res.send(course)
})
const port = process.env.PORT || 3000

app.listen(port, ()=> console.log('Port is running on ${port}'))