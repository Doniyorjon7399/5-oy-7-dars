import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    contet: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const postModel = mongoose.model("posts", postSchema);
export default postModel;
