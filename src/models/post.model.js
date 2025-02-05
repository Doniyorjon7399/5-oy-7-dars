import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
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
