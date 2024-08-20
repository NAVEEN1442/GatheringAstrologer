const express = require("express")
const router = express.Router();

const {Fetch_Satellite} = require("../controllers/Fetch_Satellite");


router.get("/satellite/:id",Fetch_Satellite);
router.get("/satellite/",Fetch_Satellite);



module.exports = router;