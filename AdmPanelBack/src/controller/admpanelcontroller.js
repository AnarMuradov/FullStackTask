import { admpanelModel } from "../model/admpanelModel.js"

export const getAllUser= async(req,res)=>{
    try {
        const user =await admpanelModel.find({}) 
        res.send(user)
    } catch (error) {
        res.send("")
    }
}

export const getUserById= async (req,res)=>{
    const {id}=req.params
    const user = await admpanelModel.findById(id)
    res.send(user)
  
} 

export const createUser= async (req,res)=>{
    try {
        const{username ,password ,role} =req.body
        const newUser = new admpanelModel({username ,password ,role})
        await newUser.save()
        res.send(newUser)
    } catch (error) {
        res.send(error.message)
    } 
}

export const updateUserById= async (req,res)=>{
    const {id}=req.params
    const{username ,password ,role} =req.body
    const user = await admpanelModel.findByIdAndUpdate(id,{username ,password ,role})
    res.send(user)
}

export const deleteUserById= async (req,res)=>{
    const {id}=req.params
    const user = await admpanelModel.findByIdAndDelete(id)
    res.send("data is deleted")
}