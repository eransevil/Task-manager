const express = require('express')
require ('./db/mongoose')
const UserRouter = require ('./routers/user')
const TaskRouter = require ('./routers/task')

const app = express()
const port = process.env.port || 3000
 
// automaticly parse to an object 
app.use(express.json())
app.use(UserRouter)
app.use(TaskRouter)

app.listen(port, () =>{
    console.log('Server is up on port '+ port)
})
 
const jwt =  require('jsonwebtoken')
 
const myFunction = async() =>{
const token = jwt.sign({_id:'abc124'}, 'thisismynewcourse', {expiresIn:'10 seconds'})
console.log (token)
const data = jwt.verify(token,'thisismynewcourse')
console.log(data)
}
myFunction()