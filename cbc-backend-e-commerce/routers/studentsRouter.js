import { createStudent, getStudents } from "../controllers/studentController.js";
import Student from "../models/student.js";
import express from "express";
const studentRouter = express.Router();

studentRouter.get("/",getStudents );

studentRouter.post("/",createStudent);

studentRouter.delete("/", 
    ()=>{
        console.log("Delete request into studentRouter")
    }
)

studentRouter.put("/", 
    ()=>{
        console.log("Put request into studentRouter")
    }
)


export default studentRouter;       
        