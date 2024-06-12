import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://enter_your_user_name:enter_your_password@enter_project_name.zybsihc.mongodb.net/enter_project_name?retryWrites=true&w=majority&appName=enter_project_name');
        console.log("DB Connected")
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}