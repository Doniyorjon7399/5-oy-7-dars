import postService from "../services/add.Post.service.js";

class postController {
  constructor() {
    this.postService = new postService();
  }
  async addPostController(req, res) {
    const body = req.body;
    const post = await this.postService.addPost(body);
    if (post) {
      res.status(200).json({ message: "add post" });
    }
  }
}
export default postController;
