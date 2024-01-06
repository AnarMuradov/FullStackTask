
export const handleLoginController= async (req,res)=>{
    try {
        res.send("login")
    } catch (error) {
        res.send(error.message)
    } 
}

export const handleRegisterController= async (req,res)=>{
    try {
        const{username ,password ,role} =req.body
        const newUser = new admpanelModel({username ,password ,role})
        await newUser.save()
        res.send(newUser)
    } catch (error) {
        res.send(error.message)
    } 
}