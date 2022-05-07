const mongoose = require("mongoose")

const Slides = mongoose.Schema({
    title: String,
    subtitle: String,
    imageUrl: String,
})

module.exports = mongoose.model("slides", Slides)