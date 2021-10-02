const Task = require('../models/Task')
const getAlltasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(201).json({tasks})
    } catch (error) {
        res.status(500).json(error)
    }
    
}
const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json(error)
    }

}
const getTask = async (req,res) => {
    try {
        const {id:TaskId} = req.params
        const task = await Task.findOne({_id:TaskId})
        if(!task){
            res.status(404).json({msg:`no task found on the given id ${TaskId}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({error})
    }

}
const updateTask = async (req,res) => {
    try {
        const {id:TaskId} = req.params
        const task = await Task.findOneAndUpdate({_id:TaskId},req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            res.status(404).json({msg:`no task found on the given id ${TaskId}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({error})
    }
}
const deleteTask = async (req,res) => {
    try {
        const {id:TaskId} = req.params
        const task = await Task.findOneAndDelete({_id:TaskId})
        if(!task){
            res.status(404).json({msg:`no task deleted on the given id ${TaskId}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports={
    getAlltasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}