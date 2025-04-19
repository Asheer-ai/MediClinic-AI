import express from "express"
import { adminLogin, allPatients } from "../controllers/adminController.js";
import { addMedicalTest, deleteMedicalTest, getAllMedicalTest } from "../controllers/medicalTestController.js";


const router=express.Router();

router.post('/login', adminLogin);
router.get('/allpatients',allPatients);
router.post('/addtest', addMedicalTest);
router.get('/alltest', getAllMedicalTest);
router.delete('/deletetest/:testId', deleteMedicalTest);
router.post('/prescriptions', addPrescription);
router.get('/prescriptions', getAllPrescriptions);
router.get('/prescriptions/:userId/:doctorId', getPrescriptionsByUserAndDoctor);
router.get('/prescriptions/:userId', getPrescriptionsByUserId);

export default router;