import express from "express"
import { addDoctor, deleteDoctor, doctorLogin, getAllDoctors, getDoctor } from "../controllers/doctorController.js";

const router=express.Router();

router.post('/add-doctor', addDoctor);
router.get('/all-doctors', getAllDoctors);
router.post('/login', doctorLogin);
router.delete('/delete/:id', deleteDoctor);
router.get('/:id', getDoctor);


export default router;

