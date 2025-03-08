import { Router } from "express"
import {Request,Response } from "express"
import {getTodo,addTask,deleteTask} from '../controllers/to-do.controllers'

const routes:Router = Router()

routes.get("/",getTodo)
routes.post("/newTask",addTask)
routes.post("/delete/:id",deleteTask)


export default routes;
