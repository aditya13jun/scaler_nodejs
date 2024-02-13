const express = require('express')

const app = express()
const courses = [
    {id:1, name:'Javascript'},
    {id:2, name:'Java'},
    {id:3, name:'Python'}
]

app.use(express.json())

app.get('/' , (req, res)=>{
    res.send('Hello from Scaler Topics!!')
})  //read data = get()

app.get('/about', (req, res)=>{
    res.send('We Create Impact!!')
})

app.get('/contact', (req, res)=>{
    res.send('Contact us here!!')
})

app.get('/courses', (req,res)=>{
    res.send(courses)
})

app.post('/courses', (req,res)=>{
    const course = {
        id : courses.length+1,
        name : req.body.name
    }
    courses.push(course)
    res.send(course)
})

//put method - UPDATING THE DATA
app.put('/courses/:coursename', (req,res)=>{
    let course = courses.find(course => course.name === req.params.coursename)
    if(!course) res.status(404).send('The course you are looking for does not exists!!')
    res.send(course)

    course.name = req.body.name
    res.send(course)
})

//delete
// app.delete('/courses/:coursename', (req,res)=>{
//     let UpdatedCourses = courses.filter(course => course.name !== req.params.coursename)

//     courses = UpdatedCourses
//     res.send(courses)
// })

app.delete('/courses/:id', (req,res) =>{
    let course = courses.find(course => course.id === parseInt(req.params.id))
    if(!course) res.status(404).send('The course you are looking for does not exists!!')

    const index = courses.indexOf(course)

    courses.splice(index,1)

    res.send(course)

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