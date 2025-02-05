import express from "express";
import connectDb from "./config/connect.js";
import { Error } from "mongoose";
import Routes from "./routes/routes.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use("/api", Routes());

const boostrap = async () => {
  try {
    await connectDb();
    console.log("databese connect");
    app.listen(PORT, () => {
      console.log("service is running port:", PORT);
    });
  } catch (error) {
    console.error(Error.messages);
  }
};
boostrap();
