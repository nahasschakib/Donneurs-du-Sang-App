const express = require("express");
const { createDonor, getAlldonors, updateDonor, getOneDonor, deleteDonor, DonorStats } = require("../controllers/Donor");
const { verifyTokenAndAuthorization } = require("../middleware/verifyToken");
const router = express.Router();

//ADD DONOR
router.post("/",verifyTokenAndAuthorization, createDonor);

//GET ALL DONORS
router.get("/", getAlldonors);

//UPDATE DONOR
router.put("/:id", updateDonor);

//GET ONE DONOR
router.get("/find/:id", getOneDonor);

//DELETE DONOR
router.delete("/:id", deleteDonor);

//DONOR STATS
router.get("/Stats", DonorStats) 



module.exports=router;