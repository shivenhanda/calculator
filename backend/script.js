import express from 'express';
import path from 'path';
import { calculation } from './calculation.js';
import {calculationdegree} from './calculationdegree.js'
import dotenv from 'dotenv'; 
import cors from 'cors';
dotenv.config();
const app = express();

const staticPath = path.join(process.cwd(), "../frontend/dist")
app.use(express.static(staticPath))
app.use(express.json())
app.use(cors({
    origin: "https://calculator1-0ha8.onrender.com",
    methods: ["GET", "POST"], 
    credentials: true
}))
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"))
}

)
app.post("/calculate", (req, res) => {
    const { expression } = req.body;
    try {
        const result = calculation(expression); 
        res.json({ result });
    } catch (err) {
        res.status(400).json({ error: "Invalid expression" });
    }
});
app.post("/calculatedegree", (req, res) => {
    const { expression } = req.body;
    try {
        const result = calculationdegree(expression); 
        res.json({ result });
    } catch (err) {
        res.status(400).json({ error: "Invalid expression" });
    }
});
const PORT=process.env.VITE_BACKEND_URL || 8000
app.listen(PORT)