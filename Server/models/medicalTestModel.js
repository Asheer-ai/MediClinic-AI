import mongoose from "mongoose";

const medicalTestSchema = new mongoose.Schema({
    user:
    {
        type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: false
    },
    doctor:
    {
        type: mongoose.Schema.Types.ObjectId, ref: "Doctor" , required:false 
    },
    name: {
    type: String,
    required: true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    date:
    {
        type:String,required:false
    }
})

const MedicalTest=mongoose.model('MedicalTest',medicalTestSchema);
export default MedicalTest;