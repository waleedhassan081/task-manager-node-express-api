const mongoose=require('mongoose')


const TaskSchema=new mongoose.Schema({
    name:String,
    completed:Boolean
},{
    timestamps:true
})

module.exports=mongoose.model('Task',TaskSchema)