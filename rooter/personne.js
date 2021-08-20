const express =require("express");
const controler=require("../controller");
const rooter=express.Router()

rooter.post("/save", controler.personne.save)
rooter.get("/",controler.personne.getall)
rooter.put("/update",controler.personne.update)


module.exports=rooter