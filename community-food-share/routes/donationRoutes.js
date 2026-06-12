const express = require("express");
const router = express.Router();

const Donation = require("../models/Donation");


// CREATE
router.post("/add", async(req,res)=>{
    try{
        const donation = new Donation(req.body);
        await donation.save();
        res.json(donation);
    }
    catch(error){
        res.status(500).json(error);
    }
});


// READ
router.get("/", async(req,res)=>{
    const donations = await Donation.find();
    res.json(donations);
});


// UPDATE
router.put("/:id", async(req,res)=>{
    const donation = await Donation.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json(donation);
});


// DELETE
router.delete("/:id", async(req,res)=>{
    await Donation.findByIdAndDelete(req.params.id);
    res.json({
        message:"Donation Deleted"
    });
});

module.exports = router;