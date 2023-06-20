const express = require("express")
const router=express.Router()
const Categorie=require("../models/categorie")
const  uploadImg =require("../middleware/multer")

router.get("/" , async(req,res)=>{
try{
const cat=await Categorie.find()
res.status(200).json(cat)
}
catch(error){
    res.status(404).json({message:error.message})

}

})

router.post("/",uploadImg.single("imagecategorie"),async(req,res)=>{
    const nomcategorie=req.body.nomcategorie
    
    //const imagecategorie=req.file.filename
    const url=req.protocol + '://' + req.get('host')
    const imagecategorie=url + '/public/' + req.file.filename

    const cat1=new Categorie({nomcategorie:nomcategorie,imagecategorie:imagecategorie})
    //const cat1=new Categorie(req.body)
    try{
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
    await Categorie.findByIdAndUpdate(id, cat1);

    res.json(cat1);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }

})
router.delete("/",async(req,res)=>{

})

module.exports=router