import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app = express();  


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
import authRouter from './routes/auth.routes.js';
import { healthCheckRouter } from './routes/healthCheck.routes.js';

app.use("/api/v1/healthcheck",healthCheckRouter);

//auth routes
app.use("/api/v1/auth",authRouter);




app.use("/api/v1/development",router);


export default app;