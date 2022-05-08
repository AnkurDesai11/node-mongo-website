const mongoose = require("mongoose")

const Projects = mongoose.Schema({
    icon: String,
    title: String,
    description: String,
    exploreLink: String,
    infoLink: String
})

module.exports = mongoose.model("projects", Projects)