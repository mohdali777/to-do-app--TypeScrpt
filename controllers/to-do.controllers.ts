import { Request, RequestHandler, response, Response } from "express"; 
import {BaseTask,Task,UrgentTask} from "../model/to-do-Model"



export const getTodo:RequestHandler = (req:Request,res:Response) :void =>{ 
         return res.render("to-do")
} 

let taskId = 1;
let taskList: BaseTask [] = []
export const addTask:RequestHandler = (req:Request,res:Response):any =>{
   console.log(req.body)
    const {task,priority} = req.body;
    if (!task) {
        return res.status(400).json({ error: "Task is required" });
    }

    let newTask: BaseTask;

    if (priority) {
        newTask = new UrgentTask(taskId++, task, priority);
    } else {
        newTask = new Task(taskId++, task);
    }

    taskList.push(newTask);
    console.log("Task added:", newTask);
    console.log("Current task list:", taskList);

    return res.status(201).json({ message: "Task added successfully",  newtaskk : newTask.json() ,check:"true"});

}


export const deleteTask = (req:Request,res:Response) : any =>{
    const {id} = req.params;

    if(!id){
        return res.status(404).json({ error: "server Error" });
    }
    
    taskList = taskList.filter((val) : any => val.id.toString() != id);
    return res.status(200).json({ message: "Task deleted successfully" });
}



