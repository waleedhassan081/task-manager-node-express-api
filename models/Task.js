const mongoose=require('mongoose')


const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'you have to provide the name'],
        maxlength:[20,'the maximum character you can insert is 20']
    },
    completed:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

module.exports=mongoose.model('Task',TaskSchema)