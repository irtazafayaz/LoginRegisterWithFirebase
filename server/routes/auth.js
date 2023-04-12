import express from "express";
import { currentUser, privateRoute } from "../controllers/auth";
import { isUserLoggedInMiddleWare } from "../middlewares";


const router = express.Router();

router.post('/current-user', isUserLoggedInMiddleWare, currentUser);
router.get("/private-route", isUserLoggedInMiddleWare, privateRoute);

module.exports = router;