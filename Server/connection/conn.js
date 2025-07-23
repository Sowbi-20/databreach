const mongoose=require('mongoose');


const conn=async()=>{
    try{
        await mongoose.connect('mongodb+srv://abi:1234@cluster0.urze4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Database connected successfully!");
    }
    catch(err)
    {
       console.log("Error in connection DB");
       console.log(err);
    }
}
conn();
