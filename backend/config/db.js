import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Connection string
    await mongoose.connect(
      "mongodb+srv://USERNAME:PASSWORD@PROJECT_NAME.zybsihc.mongodb.net/PROJECT_NAME?retryWrites=true&w=majority&appName=PROJECT_NAME"
    );
    console.log("DB Connected");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};
