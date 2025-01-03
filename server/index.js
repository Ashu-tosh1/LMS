import express from 'express'
import dotenv from'dotenv'
import connectDb from './database/db.js';
import userroute from "./routes/user.routes.js"
import cookieParser from "cookie-parser"
import cors from"cors"
dotenv.config();
// call databse connection
connectDb();

const app=express()
const PORT = 3000 || 4000; // Use a different default port
//default middleware
app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin:"http://localhost:3000",
  Credentials:true
}))

//apis
app.use("/api/v1/user",userroute);

app.get('/home', (req, res) => {
  res.status(200).json({
    success:true,
    message:"hello i am from backend"
  })
})


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Make sure MongoDB is running...');
});