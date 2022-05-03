const express = require("express");
const { route } = require("express/lib/application");
const Details = require("../models/Details")
const router = express.Router();

router.get("/", async (req, res) => {
    const detail = await Details.findOne()
    //console.log(detail)
    res.render("index", { details: detail })
});

router.get("/gallery", async (req, res) => {
    const detail = await Details.findOne()
    res.render("gallery", { details: detail })
});

module.exports = router;