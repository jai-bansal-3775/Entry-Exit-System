const express = require("express");
const router = express.Router();

const { createUser } = require("../controller/createUser");
const { getUser } = require("../controller/getUsers");
const { getAllUser } = require("../controller/getAllUser");
const {updateEntry} = require("../controller/updateEntry");
const { getOutUser} = require("../controller/getOutUsers");
const {getOutUserbyDate} = require("../controller/getByDate");
const { getUserFromRegister } = require("../controller/getUserFromRegister");

router.post("/createUser", createUser);
router.get("/getUser/:id", getUser);
router.get("/getallUsers",getAllUser)
router.put("/updateEntry/:id",updateEntry);
router.get('/getOutUser',getOutUser);
router.get('/getByDate/:id',getOutUserbyDate);
router.get('/getUserFromRegister/:id',getUserFromRegister);

module.exports = router;
