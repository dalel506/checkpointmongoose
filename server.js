const express = require ("express")
const app = express()
const mongoose = require ("mongoose")
app.use(express.json())
app.use("/api", require("./Routes/userRoutes"))



mongoose.connect("mongodb+srv://daleldalel:daleldalel@cluster0.pag5y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("database connected"))


const PORT=5005
app.listen(PORT,()=> console.log("my server is running on port", PORT))