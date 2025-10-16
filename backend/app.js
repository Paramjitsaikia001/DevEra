import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
const app = express();  
dotenv.config();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials:true
        
    }
))


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(cookieParser())


import router from './routes/roadmaproutes.js';
app.use("/api/development",router)



export default app;