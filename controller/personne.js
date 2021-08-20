const models=require("../initialmodels/initialmodals");
const {nanoid}=require("nanoid");

module.exports={
    save: (req,res)=>{
        models.tbpersonne.build({
            idpersonne:nanoid(20),
            nom:req.body.nom,
            postnom:req.body.postnom,
            prenom:req.body.prenom,
            sexe:req.body.sexe
         }).save()
         .then((resp)=>{
             console.log(resp);
              res.json(resp);
         }).catch((error)=>{
             console.log(error);
              res.status(404).json(error)
         })
    },
    getall:(req,res)=>{
        models.tbpersonne.findAll().then((resp)=>{res.json(resp)}).catch((error)=>{res.status(404).json(error)})
    },
    update:(req,res)=>{
        const {nom, postnom, prenom, sexe, idpersonne}=req.body;
        models.tbpersonne.update({
            nom:nom,
            postnom:postnom,
            prenom:prenom,
            sexe:sexe
        }, {
            where:{
                idpersonne:idpersonne
            }
        }).then((resp)=>{
            res.json("update");
        }).catch((error)=>{
            res.status(404).json(error);
        })
    }
}