const express = require("express");     //importing express
const app = express()                   //initialising app by calling express
const PORT = 5000

app.use(express.json())                 //middleware

//          routes   callback function with 2 parameters (request and response)
app.get("/getQuotes", (req,res)=>{
    
}
)