import express from "express"
import { loginPatient, logoutPatient, patientDetails, registerPatient } from "../controllers/patientController.js";
import { addAppointment } from "../controllers/appointmentController.js";

const router=express.Router()

router.post("/register",registerPatient);
router.post("/login",loginPatient);
router.post("/logout",logoutPatient);
router.post("/addappointment", addAppointment);
router.get("/:patientId",patientDetails);

export default router;
