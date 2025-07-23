const router = require("express").Router();
const User = require("../models/User");
const InvalidLogin=require("../models/Invalid");

router.post("/adduser",async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=new User({email,password});
        await user.save();
        res.status(201).json({ message: "User added successfully", user });
    }
    catch(err)
    {
        console.error("Add user error:", err.message);
        res.status(500).json({ message: "Server error!" });
    }
});


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            const invalidData = new InvalidLogin({ email, password });
            await invalidData.save();
            return res.status(400).json({ message: "Invalid login attempt!" });
        }
        if (existingUser.password === password) {
            return res.status(200).json({ message: "Login successful", user: existingUser });
        } else {
            const invalidData = new InvalidLogin({ email, password });
            await invalidData.save();
            return res.status(400).json({ message: "Invalid login attempt!" });
        }
    } catch (err) {
        console.error("Login error:", err.message);
        res.status(500).json({ message: "Server error!" });
    }
});


router.get("/getInvalid",async(req,res)=>{
    try{
           const InvalidData=await InvalidLogin.find();
           res.status(200).json({message:"Data Fetched succuessfully!",data:InvalidData});
    }
    catch(err)
    {
        res.status(500).json({ message: "Server error!" ,err:err});
    }
})

router.get("/getusers",async(req,res)=>{
    try{
           const UserData=await User.find();
           res.status(200).json({message:"Data Fetched succuessfully!",data:UserData});
    }
    catch(err)
    {
        res.status(500).json({ message: "Server error!" ,err:err});
    }
})

module.exports=router;