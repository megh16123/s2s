const mongoose  = require('mongoose');

const studentDat = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    fatherName:{
        type:String,
        required:true
    },
    class:{
      type:String,
      required:true
    },
    age:{
        type:Number,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        maxlength:[10,"Contact cannot exceed 10 numbers"],
        required:true
    },
    Fcontact:{
        type:Number,
        maxlength:[10,"Contact cannot exceed 10 numbers"],
        required:true    
    },
    fee:{
        type:Number,
        required:true 
    }
});

module.exports = mongoose.model("Student",studentDat);