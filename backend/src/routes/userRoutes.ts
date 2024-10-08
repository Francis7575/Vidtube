import { Router } from "express";
import {
  userLogin,
  userLogout,
  userSignup,
  verifyUser,
} from "../controllers/userController";
import { verifyToken } from "../utils/token-manager";

const router = Router();

router.get("/check-logged-in", verifyToken, verifyUser);
router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/logout", verifyToken, userLogout);

export default router;
