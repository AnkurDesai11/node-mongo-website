const express = require("express");
const { route } = require("express/lib/application");
const Details = require("../models/Details")
const Footer = require("../models/Footer")
const Slides = require("../models/Slides")
const Projects = require("../models/Projects");
const Messages = require("../models/Messages");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const detail = await Details.findOne()
        const footer = await Footer.findOne()
        const slides = await Slides.find()
        const projects = await Projects.find()
        res.render("index", { details: detail, footer: footer, slides: slides, projects: projects, message: req.query.message })
    } catch (e) {
        console.log(e)
        res.render("index", { message: "Could not connect to database" })
    }
    //console.log(footer)
    //console.log(slides)

});

router.get("/gallery", async (req, res) => {
    const detail = await Details.findOne()
    res.render("gallery", { details: detail })
});

router.post("/contact-form", async (req, res) => {
    console.log("form submitted")
    try {
        const data = await Messages.create(req.body)
        console.log(data)
        res.redirect("/?message=success#contact_us_section")
    } catch (e) {
        console.log(e)
        res.redirect("/?message=error#contact_us_section")
    }
});

module.exports = router;