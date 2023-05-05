const mongoose = require("mongoose");
const validator = require("validator");


// --- SCHEMA of document ---
const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
        // minlength : 3
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
        // unique : [true, "Email already exists"],
        // validate(value){
        //     if(!validator.isEmail(value)){
        //         throw new Error("Invalid email")
        //     }
        // }
    },
    phone : {
        type : Number,
        required : true
        // unique : true,
        // minlength : 10
    },
     noofdays : {
        type : Number,
        required : true
        // unique : true,
        // minlength : 10
        
    },
    address : {
        type : String,
        required : true
    }
})

// --- making new Connection ---
// Note: letter 'm' of model should be small and not capital
const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;