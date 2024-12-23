import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Successfully connected to database: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Connection error with string of ${error.message}`)
        process.exit(1);
    }

}

export default connectDb;