const getAlltasks=(req,res)=>{
    res.send('get all tasks')
}
const createTask=(req,res)=>{
    res.json(req.body)
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