const express = require('express');
import { Request, Response } from 'express';
import toDoRoutes from './routes/todoRoutes'
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use("/",toDoRoutes)
app.listen(port,()=>{
    console.log("listen 3000")
})