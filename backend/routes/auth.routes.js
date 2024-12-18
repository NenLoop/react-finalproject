import express from 'express';
import { getMe, logIn, logOut, signUp } from '../controllers/auth.controllers.js';
import { protectRoute  } from '../middleware/protectRoute.js';

const route = express.Router();

route.get("/me", protectRoute, getMe);
route.post("/signup", signUp);

route.post("/login", logIn);

route.post("/logout", logOut);

export default route;