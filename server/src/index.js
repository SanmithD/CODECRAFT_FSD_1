import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import rateLimit from "express-rate-limit";
import { dbConnect } from './config/db.config.js';
import router from './routes/user.route.js';

dbConnect();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: 'https://codecraft-fsd-1.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));

app.use(cookieParser())
app.use(bodyParser.json());

app.get('/',(req, res)=>{
    res.send("Hello word");
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many request, Please try again after 15 minutes",
});

app.use(limiter);

app.use('/api/auth',router);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});
