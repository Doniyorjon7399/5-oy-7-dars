import mongoose from "mongoose";
import postModel from "../models/post.model.js";
class postService {
  constructor() {
    this.postModel = postModel;
  }
  async addPost(body) {
    const post = await this.postModel.create(body);
    return post;
  }
  async getPost() {
    const allPost = await this.postModel.aggregate([
      {
        $project: {
          title: 1,
          content: 1,
          author: 1,
        },
      },
      {
        $lookup: {
          localField: "author",
          foreignField: "_id",
          from: "users",
          as: "author",
          pipeline: [
            {
              $project: {
                name: 1,
                email: 1,
              },
            },
          ],
        },
      },
      {
        $unwind: "$author",
      },
    ]);

    if (allPost) {
      return allPost;
    } else {
      throw new Error({ message: "nod found" });
    }
  }
  async getPostId(id) {
    const allPost = await this.postModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
      {
        $project: {
          _id: 0,
          title: 1,
          content: 1,
          author: 1,
        },
      },
      {
        $lookup: {
          localField: "author",
          foreignField: "_id",
          from: "users",
          as: "author",
          pipeline: [
            {
              $project: {
                name: 1,
                email: 1,
              },
            },
          ],
        },
      },
      {
        $unwind: "$author",
      },
    ]);

    if (allPost) {
      return allPost;
    } else {
      throw new Error({ message: "nod found" });
    }
  }
}
export default postService;
