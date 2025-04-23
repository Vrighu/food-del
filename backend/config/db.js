import mongoose from "mongoose";

export const connectDB = async () => {
    const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://vrighu:vrighu@cluster0.2wre8qw.mongodb.net/food-del';
    
    await mongoose.connect(mongoURI).then(() => console.log("DB Connected"));
}

// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.