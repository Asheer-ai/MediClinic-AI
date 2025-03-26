import mongoose, { Schema } from "mongoose";
const prescriptionSchema=new mongoose.Schema({
    user:
        { 
            type: mongoose.Schema.Types.ObjectId, ref: "Patient" , required:true 
        },
    doctor:
    {
        type: mongoose.Schema.Types.ObjectId, ref: "Doctor" , required:true 
    },
    
    date:
    {
        type:date,
        default:date.now,
    },
    patientDetails:{
        name:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            required:true,
        },
        vitals:{
            pressure:{
                type:String,
            },
            weight:{
                type:Number,
            },
            temperature:{
                type:Number,
            },
            OxygenLevel:{
                type:Number,
            },
        },
    },
    diseaseName:{
        type:String,
        required:true,
    },
    symptoms:{
        type:String,
    },
    treatment:{
        type:String,
    },
    medicine:{
        type:Array,
        required:true,
        of:{
            name:{
                type:String,
                required:true,
            },dosage:{
                type:String,
            },
        },
    },
    test:{
        type:[String],
    }

    
},{
    timestamps:true
})

const Prescription=mongoose.model('Prescription',prescriptionSchema);

export default Prescription;