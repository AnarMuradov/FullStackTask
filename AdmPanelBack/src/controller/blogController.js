import { BloglModel } from "../model/BlogModel.js"

export const getAllBlog= async(req,res)=>{
    try {
        const Blog =await BloglModel.find({}) 
        res.send(Blog)
    } catch (error) {
        res.send("")
    }
}

export const getBlogById= async (req,res)=>{
    const {id}=req.params
    const Blog = await BloglModel.findById(id)
    res.send(Blog)
  
} 

export const createBlog= async (req,res)=>{
    try {
        const{title,info} =req.body
        const newBlog = new BloglModel({title,info})
        await newBlog.save()
        res.send(newBlog)
    } catch (error) {
        res.send(error.message)
    } 
}

export const updateBlogById= async (req,res)=>{
    const {id}=req.params
    const{title,info} =req.body
    const Blog = await BloglModel.findByIdAndUpdate(id,{title,info})
    res.send(Blog)
}

export const deleteBlogById= async (req,res)=>{
    const {id}=req.params
    const Blog = await BloglModel.findByIdAndDelete(id)
    res.send("data is deleted")
}