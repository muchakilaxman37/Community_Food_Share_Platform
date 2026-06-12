const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
    donorName:{
        type:String,
        required:true
    },
    foodItem:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Donation", donationSchema);