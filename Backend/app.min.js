import express from "express";
import cors from 'cors';
import userrouter from "./Routes/userrouter.min.js";
import morgan from 'morgan'
import cookieParser from "cookie-parser";
const app = express()


app.use(cors());

app.use(express.json())

app.use(morgan("dev"))  

app.use(cookieParser())

app.use('/api/users', userrouter)


export default app;