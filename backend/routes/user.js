const express = require("express");
const router = express.Router();

const { createUser } = require("../controller/createUser");
const { getUser } = require("../controller/getUsers");
const { getAllUser } = require("../controller/getAllUser");
const {updateEntry} = require("../controller/updateEntry");
router.post("/createUser", createUser);
router.get("/getUser/:id", getUser);
router.get("/getallUsers",getAllUser)
router.put("/updateEntry/:id",updateEntry);

module.exports = router;
