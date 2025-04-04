import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectionToDB from './config/db.js';

dotenv.config()

connectionToDB();

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
    })
);

app.get('/ping', (_req, res) => {
    res.send('Pong');
});

const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
})