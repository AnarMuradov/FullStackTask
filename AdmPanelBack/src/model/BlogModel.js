import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
    title: String,
    info:String,
},{timestamps:true})

export const BloglModel =  mongoose.model("Blogs",BlogSchema)