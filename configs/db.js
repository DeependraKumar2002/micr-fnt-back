import mongoose from "mongoose";

const connectDb = async () => {
  try {
    console.log("Connecting to MongoDB:", process.env.MONGO_URI); // debug
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    throw error;
  }
};

export default connectDb;
