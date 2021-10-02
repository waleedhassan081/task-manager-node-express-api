
const express = require('express')
const app=express()
const tasks=require('./routes/tasks')
const connectDb = require('./db/connect')
require('dotenv').config()

//json middleware
app.use(express.json())
const port=process.env.PORT || 3000
app.use('/api/v1/tasks',tasks)

const start=async () => {
    try {
        await connectDb(process.env.Mongo_URL)
        app.listen(port,console.log(`Server is running at port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
