import postModel from "../models/post.model.js";
class postService {
  constructor() {
    this.postModel = postModel;
  }
  async addPost(body) {
    const post = await this.postModel.create(body);
    return post;
  }
}
export default postService;
