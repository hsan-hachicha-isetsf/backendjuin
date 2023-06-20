const express = require("express")
const router=express.Router()
const mongoose=require("mongoose")
const SCategorie=require("../models/scategorie")
router.get("/" , async(req,res)=>{
try{
const Scat=await SCategorie.find().populate("categorieID").exec()
res.status(200).json(Scat)
}
catch(error){
    res.status(404).json({message:error.message})

}

})

router.post("/",async(req,res)=>{
    
    //const cat1=new Categorie({nomcategorie:nomcategorie,imagecategorie:imagecategorie})
    const catid=req.body.categorieID
    
    if (!ObjectId.isValid(catid))  
    {return  res.status(404).send(`pas de categorie avec l'ID: ${catid}`);}
    
    try{
        const cat1=new SCategorie(req.body)
        await cat1.save();
        res.status(200).json(cat1)
    }
    catch(error){
        res.status(404).json({message:error.message})

    }
})

router.put("/",async(req,res)=>{
    const { nomcategorie, imagecategorie} = req.body;
    const id  = req.params.categorieId;

    try {
    
    const cat1 = { nomcategorie:nomcategorie,imagecategorie:imagecategorie, _id:id };
    await SCategorie.findByIdAndUpdate(id, cat1);

    res.json(cat1);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }

})
router.delete("/",async(req,res)=>{

})

module.exports=router