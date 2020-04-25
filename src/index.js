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

const bcrypt =  require('bcryptjs')

const myFunction = async() =>{
    const password = '0548117613'
    const hashedPassWord = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassWord)
    
    const isMatch = await bcrypt.compare('0548117614', hashedPassWord)
    console.log(isMatch)

}
myFunction()