import postRouter from "./post.route.js";
import userRouter from "./user.route.js";
const Routes = () => {
  return [userRouter, postRouter];
};
export default Routes;
