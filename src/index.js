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
 
const Task = require('./models/task')
const User = require('./models/user')

// const main = async() =>{
//     const task = await Task.findById('5eada2be919f996580bee0da')
//     await task.populate('owner').execPopulate()
//     console.log(task.owner)

//     const user = await User.findById('5ead86624e712d6738f02b09')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()