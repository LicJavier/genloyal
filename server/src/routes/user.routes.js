import { Router } from "express";
import { home, register } from "../controllers/user.controller.js";

const routerUser = Router();
routerUser.get('/',home );
routerUser.post('/', register);

export default routerUser;