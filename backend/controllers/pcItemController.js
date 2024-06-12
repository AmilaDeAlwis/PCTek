import pcModel from "../models/pcModel.js";
import fs from 'fs'

// add PC item
const addPcItem = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const pcItem = new pcModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })

    try {
        await pcItem.save();
        res.json({success: true, message: "Pc Item Added!"})
    } catch (error) {
        res.json({success: false, message: "Error"})
    }
}

// list all PC item
const listPcItem = async (req, res) => {
    try{
        const pcItem = await pcModel.find({});
        res.json({success: true, data: pcItem})
    } catch (error){
        res.json({success:false, message:"Error"})
    }
}

// remove PC item
const removePcItem = async (req, res) => {
    try{
        const pcItem = await pcModel.findById(req.body.id);
        fs.unlink(`uploads/${pcItem.image}`,()=>{})

        await pcModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message:"PC Item removed"})
    } catch (error) {
        console.log(error);
        res.json({success: false, nessage:"Error"})
    }
}

export {addPcItem, listPcItem, removePcItem}