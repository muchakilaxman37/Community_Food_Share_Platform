const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
"mongodb://127.0.0.1:27017/foodshareDB"
)
.then(()=>{
    console.log("MongoDB Connected");
});

const donationRoutes =
require("./routes/donationRoutes");

app.use("/api/donations", donationRoutes);

app.listen(5000,()=>{
    console.log("Server Running on Port 5000");
});