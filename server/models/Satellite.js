const mongoose = require("mongoose");

const satelliteSchema = new mongoose.Schema({
    
        satID:{
            type:String,
    
        },
        name:{
            type:String,
    
        },
        date:{
            type:Date,
    
        },
        Line1:{
            type:String,
    
        },
        Line2:{
            type:String,
    
        },

})

const Satellite = mongoose.model("Satellite",satelliteSchema);
module.exports = Satellite;