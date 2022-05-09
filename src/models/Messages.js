const mongoose = require("mongoose")

const Messages = mongoose.Schema({
    email: String,
    phone: String,
    comment: String
})

module.exports = mongoose.model("messages", Messages)