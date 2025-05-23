import mongoose from "mongoose";
const patientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: false,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    medicalHistory: [
        {
            condition: String,
            diagnosedDate: Date,
            medications: [String],
            notes: String,
        },
    ],
    appointments: [{type: mongoose.Schema.Types.ObjectId, ref: "Appointment" , required:true }],
    prescriptions: [{type: mongoose.Schema.Types.ObjectId, ref: "Prescription" , required:true}]
}, {
    timestamps: true,
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;