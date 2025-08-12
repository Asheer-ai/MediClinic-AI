import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectionToDB from './config/db.js';
import patientRoutes from './routes/patientRoute.js';
import adminRoutes from './routes/adminRoute.js';
import doctorRoutes from './routes/DoctorRoute.js'
import googleAIRoutes from './routes/googleAIRoutes.js'

dotenv.config()

connectionToDB();

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
    origin: ['https://mediclinic-ai-1.onrender.com'],
    credentials: true,
    })
);

app.get('/ping', (_req, res) => {
    res.send('Pong');
});

app.use('/api/patients',patientRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api', googleAIRoutes);


const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
})