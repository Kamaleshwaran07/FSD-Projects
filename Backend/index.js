import mongoose from "mongoose";
import dotenv from 'dotenv'
import app from "./app.min.js";



dotenv.config()

const mongoDB = process.env.mongoDBConnectionString;

const port = process.env.PORT


const connectDB = async () => {
    try {
        console.log("Connecting to mongoDB")
        const connection = await mongoose.connect(mongoDB)
        console.log("Connection Successful");
        app.listen(port, () => {
            console.log("App is running in Port");
        })
        return connection;
        

    }
    catch (error) {
        console.log("Error connecting to the database", error.message);
    }
}
connectDB()