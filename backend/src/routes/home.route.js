import { Router } from "express";
import { getStudents, getOutStudents, getEntriesByDate } from "../controllers/home.controller.js";

const router = Router();

router.route("/get-students").get(getStudents);
router.route("/get-out-students").get(getOutStudents);
router.route("/get-entries-by-date").post(getEntriesByDate);

export default router;