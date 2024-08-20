const express = require("express")
const router = express.Router();

const {signUp,sendotp, logIn} = require("../controllers/Auth");


router.post("/signup",signUp);
router.post("/login",logIn);
router.post("/sendotp",sendotp);


module.exports = router;