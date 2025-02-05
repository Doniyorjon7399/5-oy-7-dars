import addUserservice from "../services/addUser.service.js";
class userController {
  constructor() {
    this.userService = new addUserservice();
  }
  async addUserControler(req, res) {
    const body = req.body;
    console.log(body);
    const user = await this.userService.addUser(body);
    if (user) {
      res.status(200).json({ message: "add user" });
    } else {
      res.status(400).json({ message: "error" });
    }
  }
}
export default userController;
