const express = require("express");
const router = express.Router();
const { getDishes } = require("../controllers/dishesController"); // Correctly destructure the function

router.get("/dishes", getDishes);

module.exports = router;
