const express = require("express");
const { route } = require("express/lib/application");

const router = express.Router();

router.get("/", async (req, res) => {
    //console.log("in get /");
    res.send("/ working")
});

module.exports = router;