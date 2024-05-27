import { Router } from "express";
import {
    createInEntry,
    createOutEntry
} from "../controllers/register.controller.js";

const router = Router();

router.route("/create-out-entry").post(createOutEntry)
router.route("/create-in-entry").patch(createInEntry)

export default router;