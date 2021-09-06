const fs= require("fs");
const path= require("path");
const express=require("express");
const app=express();

app.use("images",express.static("images"));

const data=fs.readdirSync("c:/",err=>err);

const iterater =data.map((data,i)=>{
    return data;
})

app.get("/",(req,res)=>{
    res.send("<h1>welcome,<br>To find the localdirectory, search /c: </h1>");
})

app.get("/c:",(req,res)=>{
    iterater.forEach(data=>{

      if(data.includes(".txt")){
        res.write('<div style="display:flex; align-items:center;"><img src="./images/txt.jpg" width="20px" /><p style="padding-left:5px"> '+data+' </p></div>');
      }
       else if(data.includes(".sys")){
        res.write('<div style="display:flex; align-items:center;"><img src="./images/sys.png" width="20px" /><p style="padding-left:5px"> '+data+' </p></div>');
      }
       else{
        res.write('<div style="display:flex; align-items:center;"><img src="./images/folder.jpg" width="20px" /><p style="padding-left:5px"> '+data+' </p></div>');
      }

    })
})

app.listen(5000,()=>{
    console.log("server started");
})