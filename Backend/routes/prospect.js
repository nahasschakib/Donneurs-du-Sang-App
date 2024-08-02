const express = require("express");
const { createProspect, updateProspect, getOneProspect, deleteProspect, getAllprospects } = require("../controllers/prospect");
const { verifyTokenAndAuthorization } = require("../middleware/verifyToken");
const router = express.Router();

//ADD prospect
router.post("/",verifyTokenAndAuthorization, createProspect);

//GET ALL prospects

router.get("/", getAllprospects)

//UPDATE prospect
router.put("/:id", updateProspect);

//GET ONE prospect
router.get("/find/:id", getOneProspect);

//DELETE prospect
router.delete("/:id", deleteProspect);





module.exports=router;