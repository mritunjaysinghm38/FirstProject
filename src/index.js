// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
dotenv.config({path:'./env'})
import connectDB from "./db/index.js"

connectDB()


















// const app = express()

//   ; (async () => {
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URI}/`,{db_name:"xyz"} )
//       // app.on("ERROR", (error)=>{
//       //     console.log("Errr", error);
//       //     // throw error
//       // })

//       // app.listen(process.env.PORT,()=>{
//       //   console.log("server is running on port",process.env.PORT)
//       // })
//     } catch (error) {
//       console.log("ERROR", error)
//     }
//   })()