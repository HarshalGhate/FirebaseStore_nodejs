const express = require('express')
const cors=require('cors')
var bodyParser = require('body-parser')
const User=require('./config');
const app=express();

//parse req data content type application/x-www-form
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.json());
app.use(cors());

//get Data
app.get("/",async(req,res)=>{
    data=await User.get()
    res.send(data.docs.map((doc)=>doc.data()));
})

//Post Data
app.post("/create",async(req,res)=>{
     const data=req.body;
    // console.log("Data",data);
    await User.add(data);
    res.send({msg:"User Added !!!"})
});

app.listen(3000,()=>{
    console.log("Server Started at 3000")
})
