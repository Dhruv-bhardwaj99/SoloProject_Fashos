const express = require("express");
const connect = require("./configs/db");
require("dotenv").config();
const cors = require("cors");
const timeout = require("connect-timeout");


//controller
const shoesControllers = require("./controllers/data.controller")
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(timeout('5000ms'))
app.use(express.json());
app.use("/shoes", shoesControllers)

app.listen(PORT, async()=>{
    try{
        await connect();
        console.log("Listening at the port");
    }
    catch(err){
        console.log(err.message);
    }
});