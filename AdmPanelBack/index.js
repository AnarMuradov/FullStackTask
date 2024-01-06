import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { admpanelRouter } from './src/router/admpanelRouter.js'
import { authRouter } from './src/router/AuthRouter.js'
import { BlogRouter } from './src/router/BlogRouter.js'
const app = express()
const port = 3000 
app.use(express.json())
app.use(cors())

app.use("/",admpanelRouter)
app.use("/",authRouter)
app.use("/",BlogRouter)




mongoose.connect('mongodb+srv://anar:anar@cluster0.aeurkzy.mongodb.net/')
.then(() => console.log('Connected!')) 
.catch(()=>console.error("Not connected!"))
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })