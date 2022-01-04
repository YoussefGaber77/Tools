import mongoose from "mongoose";

const connString = process.env.MONGODB_CONNSTRING;
const connection = async() => {
    try {
        await mongoose.connect(
            "mongodb://"+process.env.IP+":27017//youssef", {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
            }
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
export default connection;