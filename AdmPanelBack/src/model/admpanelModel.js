import mongoose from 'mongoose'

const admpanelSchema = new mongoose.Schema({
    username: String,
    password:String,
    role:{
        type:String,
        default:"User"
    }

},{timestamps:true})

export const admpanelModel =  mongoose.model("admpanel",admpanelSchema)