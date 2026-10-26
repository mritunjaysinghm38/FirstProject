// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
dotenv.config({ path: './env' })
import connectDB from "./db/index.js"
import { app } from "./app.js"





connectDB()
  .then(() => {
    app.listen(process.env.PORT || 6000, () => {
      console.log(`Server is running at Port : ${process.env.PORT}`);
    })
  })
  .catch((err) => {
    console.log(`MONGODB connection failed !!! `, err);
  })





























  

  // app.get('/', (req, res) => res.json({ 'message': 'This is home route ' }));



