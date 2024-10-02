import express from 'express'
import dotenv from 'dotenv'
import { createTodo, updateTodo } from './Types.js'
import { connectDB } from './db.js'

dotenv.config()

const app = express()
app.use(express.json())
const port = process.env.PORT || 5000;


// 
app.post('/todo' ,function(req , res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            success:false,
            msg:"you sent the wrong inputs"
        })
        return;
    }



})
app.get('/todos' ,function(req , res){

})
app.put('/completed' ,function(req , res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            success:false,
            msg:"you sent the wrong inputs"
        })
        return;
    }

})

app.listen(port , function(){
    connectDB()
    console.log(`server started at : ${port}`);
    
})