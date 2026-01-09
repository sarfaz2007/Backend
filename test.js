import mongoose from "mongoose";

export const connectdb=()=>{
    try {
        mongoose.connect("mongodb+srv://sarfazsarfaz646_db_user:NFn6wLaUo28eqbKU@cluster0.2fetyoq.mongodb.net/?appName=Cluster0").then(()=>{
            console.log("db connected succesfully");
            
        })
    } catch (error) {
        console.log(error);
        
        
    }
}