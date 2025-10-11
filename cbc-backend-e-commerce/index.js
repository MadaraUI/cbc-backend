import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

import studentRouter from "./routers/studentsRouter.js";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";



const app = express()


app.use(express.json())

app.use(
    (req,res,next)=>{
        let token = req.header("Authorization")
        if(token != null){
            token = token.replace("Bearer ","")
            console.log(token)
            jwt.verify(token,"jwt-secret",
                (err, decoded)=>{
                    if(decoded == null){
                        res.json(
                            {
                                message: "Invalid token please login again"
                            }
                        )
                        return
                    }else{
                        
                        req.user = decoded
                    }
            }
        )
        }

        next()

    }
)



const connectionString = "mongodb+srv://admin:123@cluster0.0ry7obd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connectionString).then(
    ()=>{
        console.log("Database connected successfully")
    }
).catch(
    ()=>{
        console.log("Database connection failed")
    }
)




app.use("/students",studentRouter)
app.use("/users",userRouter)
app.use("/products",productRouter)




app.get("/", 
    
)


app.post("/",
    (req,res)=>{
     
    }
)


app.delete("/",
    (req,res)=>{
        console.log("Delete request recived")
    }
)








app.listen(5000, 
    ()=>{
        console.log("Server is running on port 5000")
})