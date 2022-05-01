const express = require("express");
const { route } = require("express/lib/application");

const router = express.Router();

router.get("/", async (req, res) => {
    //console.log("in get /");
    res.render("index")
});

router.get("/gallery", async (req, res) => {
    //console.log("in get /");
    res.render("gallery")
});

module.exports = router;