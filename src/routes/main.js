const express = require("express");
const { route } = require("express/lib/application");
const Details = require("../models/Details")
const Slides = require("../models/Slides")
const Projects = require("../models/Projects")
const router = express.Router();

router.get("/", async (req, res) => {
    const detail = await Details.findOne()
    const slides = await Slides.find()
    const projects = await Projects.find()
    //console.log(detail)
    //console.log(slides)
    res.render("index", { details: detail, slides: slides, projects: projects })
});

router.get("/gallery", async (req, res) => {
    const detail = await Details.findOne()
    res.render("gallery", { details: detail })
});

module.exports = router;