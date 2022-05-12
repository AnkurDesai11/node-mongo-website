const mongoose = require("mongoose")
const Footer = mongoose.Schema({
    brandName: String,
    brandText: String,
    brandIconUrl: String,
    brandIconText: String,
    siteLinks: [
        {
            label: String,
            url: String,
        },
    ],
    socialLinks: [
        {
            icon: String,
            url: String,
        },
    ],
});

module.exports = mongoose.model("footer", Footer)