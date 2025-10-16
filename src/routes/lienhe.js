const express = require("express");
const { getOneLienHe, createLienHe, updateLienHe } = require("../controllers/LienHe/text.controller");


const router = express.Router();

router.get("/get-lienhe", getOneLienHe );
router.post("/create-lienhe", createLienHe );
router.put("/update-lienhe", updateLienHe );


module.exports = router;