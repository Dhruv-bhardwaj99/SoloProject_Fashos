const express = require("express");
const connect = require("./configs/db");
const port = 9000

//controller
const dataControllers = require("./controllers/data.controller")

const app = express();

app.use(express.json());
app.use("/data", dataControllers)

app.listen(port, async()=>{
    try{
        await connect();
        console.log("Listening at the part"+ " "+port);
    }
    catch(err){
        console.log(err.message);
    }
});