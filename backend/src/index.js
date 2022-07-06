const express = require("express");
const connect = require("./configs/db");
require("dotenv").config();
const cors = require("cors");


//controller
const shoesControllers = require("./controllers/data.controller")
const PORT = process.env.PORT || 3005;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/shoes", shoesControllers)

app.listen(PORT, async()=>{
    try{
        await connect();
        console.log(`Listening in the port ${PORT}`);
    }
    catch(err){
        console.log(err.message);
    }
});