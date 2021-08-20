require("dotenv").config()
const express=require("express");
const cors=require("cors")
const ports=process.env.PORT || 3000;
const app=express();
const rooter=require("./rooter")

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/personne", rooter.personnes)

app.listen(ports, ()=>{console.log(`http://localhost:${ports}`)})
