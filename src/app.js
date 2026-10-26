import express from 'express'
import cookieParser from 'cookie-parser'
import cors from "cors"
import dotenv from "dotenv"
dotenv.config({ path: './env' })

const app = express()
//"app.use" is used for configrations
app.use(cors({                                                    //cors settings 
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))


app.use(express.json({ limit: "16kb" }))                          //taking json data (settings)
app.use(express.urlencoded({ extended: true, limit: "16kb" }))   //taking data from url (settings)
app.use(express.static("public"))                             // taking files  (settings)
app.use(cookieParser())                                       // setting cookie in browsers, taking cookie from browser  (settings)



// // routes import 
import userRouter from './routes/user.route.js'



// // routes delearation
app.use("/api", userRouter)


export { app }