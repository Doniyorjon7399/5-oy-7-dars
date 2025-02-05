import userModel from "../models/user.model.js";
class addUserservice {
  constructor() {
    this.userModel = userModel;
  }
  async addUser(body) {
    return await this.userModel.create(body);
  }
}
export default addUserservice;
