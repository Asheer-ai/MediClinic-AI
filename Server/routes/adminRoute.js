import express from "express"
import { adminLogin, allPatients } from "../controllers/adminController.js";
import { addMedicalTest, deleteMedicalTest, getAllMedicalTest } from "../controllers/medicalTestController.js";
import { addPrescription, getAllPrescriptions, getPrescriptionsByUserAndDoctor, getPrescriptionsByUserId } from "../controllers/prescriptionController.js";


const router=express.Router();

router.post('/login', adminLogin);
router.get('/allpatients',allPatients);

router.post('/addtest', addMedicalTest);
router.get('/alltest', getAllMedicalTest);
router.delete('/deletetest/:testId', deleteMedicalTest);


router.post('/prescriptions', addPrescription);

router.get('/prescriptions/user/:userId/doctor/:doctorId', getPrescriptionsByUserAndDoctor);
router.get('/prescriptions/user/:userId', getPrescriptionsByUserId);
router.get('/prescriptions', getAllPrescriptions);


export default router;