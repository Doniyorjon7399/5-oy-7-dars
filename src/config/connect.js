import mongoose from "mongoose";
import "dotenv/config";

const url = process.env.DB_URL;

const connectDb = async () => {
  await mongoose.connect(url, {
    dbName: "databese",
  });
};
export default connectDb;
