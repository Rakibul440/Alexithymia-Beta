import { Router } from "express";
import { 
    allPosts, 
    createPosts, 
    deletePost, 
    home, 
    postById, 
    updatePost 
} from "../controllers/userControllers.js";

const router = Router();

router.route("/").get(home);
router.route("/explore").get(allPosts)
router.route("/post/:id").get(postById)
router.route("/explore").post(createPosts);
router.route("/explore/:id").delete(deletePost);
router.route("/explore/:id").put(updatePost)

export default router;