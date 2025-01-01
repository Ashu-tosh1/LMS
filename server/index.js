import express from 'express'
import dotenv from'dotenv'
import connectDb from './database/db.js';
import userroute from "./routes/user.routes.js"


dotenv.config();
// call databse connection
connectDb();

const app=express()
const port=3000

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
  

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Make sure MongoDB is running...');
});