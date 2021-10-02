const Task=require('../models/Task')
const getAlltasks=(req,res)=>{
    res.send('get all tasks')
}
const createTask= async (req,res)=>{
    const task=await Task.create(req.body)
    res.status(200).json({task})
}
const getTask=(req,res)=>{
    res.json({id:req.params.id})
}
const updateTask=(req,res)=>{
    res.send('task update')
}
const deleteTask=(req,res)=>{
    res.send('delete task')
}

module.exports={
    getAlltasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}