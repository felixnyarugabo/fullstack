import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import morgan from "morgan"
import helmet from "helmet"
import nodemon from "nodemon"
import dotenv from "dotenv"
import router from "./routes/product.route.js"

dotenv.config()
const app = express()

// midleway
app.use(cors({origin:"http://localhost:5174"}))
app.use(helmet())
app.use(morgan("dev"))
app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use("/api/products", router)

const PORT=process.env.PORT ||5000 


app.get("/",(qer,res)=>{
   res.send(`welcome to mongoosedb`) })


   mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("conected to the database")
    app.listen(PORT,()=>{
    console.log(`server is runngi on port: http://localhost:${PORT}`)
})
   }).catch((error=>{
    console.error(error.message);
    
   }))