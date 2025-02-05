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
  async getPostcontroller(req, res) {
    const allpost = await this.postService.getPost();
    res.status(200).json(allpost);
  }
  async getPostIdcontroller(req, res) {
    const { id } = req.params;
    const allpost = await this.postService.getPostId(id);
    res.status(200).json(allpost);
  }
}
export default postController;
