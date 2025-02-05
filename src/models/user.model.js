import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const userModel = mongoose.model("users", userSchema);
export default userModel;
