import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())
const port = process.env.PORT || 5000;


// 
app.post('/todo' ,function(req , res){

})
app.get('/todos' ,function(req , res){

})
app.put('/completed' ,function(req , res){

})

app.listen(port , function(){
    console.log(`server started at : ${port}`);
    
})