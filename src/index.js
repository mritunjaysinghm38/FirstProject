// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
dotenv.config({ path: './env' })
import connectDB from "./db/index.js"
import { app } from "./app.js"

connectDB()
  .then(() => {
    app.on("ERROR", (error) => {
      console.log("Errr", error);
    })
    app.listen(process.env.PORT || 6000, () => {
      console.log(`Server is running at Port : ${process.env.PORT}`);
    })
    app.on("ERROR", (error) => {
      console.log("My App not able to talk to db", error);
      throw error
    })
  })
  .catch((err) => {
    console.log(`MONGODB connection failed !!! `, err);
  })


















// const app = express()


// ; (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}` )
//     app.on("ERROR", (error)=>{
//         console.log("Errr", error);
//         throw error
//     })

//     app.listen(process.env.PORT,()=>{
//       console.log("server is running on port",process.env.PORT)
//     })
//   } catch (error) {
//     console.log("ERROR", error)
//   }
// })()