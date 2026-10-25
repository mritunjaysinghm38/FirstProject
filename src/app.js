import express from 'express'
import cookieParser from 'cookie-parser'
import cors from "cors"

const app = express()
//app.use is used for configrations
app.use(cors({                              //cors settings
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({limit:"16kb"}))         //taking json data
app.use(express.urlencoded({extended:true, limit:"16kb"}))   //taking data from url
app.use(express.static("public"))                             // taking files
app.use(cookieParser())                                       // setting cookie in browsers, taking cookie from browser



export {app}