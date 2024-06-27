import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Connection string
    await mongoose.connect(
      "mongodb+srv://amila:ygda2011@pctek.zybsihc.mongodb.net/pctek?retryWrites=true&w=majority&appName=pctek"
    );
    console.log("DB Connected");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};
