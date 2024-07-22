const express = require("express");
const { createProspect, getAllProspects, updateProspect, getOneProspect, deleteProspect, getAllprospects } = require("../controllers/prospect");
const router = express.Router();

//ADD DONOR
router.post("/", createProspect);

//GET ALL DONORS
router.get("/", getAllprospects)

//UPDATE DONOR
router.put("/:id", updateProspect);

//GET ONE DONOR
router.get("/find/:id", getOneProspect);

//DELETE DONOR
router.delete("/:id", deleteProspect);





module.exports=router;