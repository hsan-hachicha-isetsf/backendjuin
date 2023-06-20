const mongoose =require("mongoose")

const ScategorieSchema=mongoose.Schema({
    
nomscategorie:{ type: String, required: true },
imagescat :{ type: String, required: false },
categorieID: {type:mongoose.Schema.Types.ObjectId,ref:"Categorie"}
})

const Scategorie=mongoose.model('scategorie',ScategorieSchema)
module.exports=Scategorie