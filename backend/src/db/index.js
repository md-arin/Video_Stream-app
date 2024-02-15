import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGO db Connected !!`);
    } catch (error) {
        console.log("MONGO db connection ERROR:", error);
        process.exit(1);
    }
}

export default connectDB;