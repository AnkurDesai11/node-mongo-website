const express = require("express");
const hbs = require("hbs");
const { default: mongoose } = require("mongoose");
const Details = require("./models/Details");
const app = express();
const routes = require("./routes/main");
//require("dotenv").config();
const port = process.env.PORT || 3500;

// access all files in public folder using static path eg. /static/css/styles.css
app.use("/static", express.static("public"))

//app.use(bodyParser.json());
app.use("", routes);

// partials(ie. reusable components like navbar) declaration
hbs.registerPartials("views/partials")

//db connection
mongoose.connect("mongodb://localhost/node-mongo-website", () => {
    console.log("db connected");
    Details.create({
        brandName: "Cool Site",
        brandIconUrl: "http://www.w3schools.com/css/img_mountains.jpg",
        links: [
            {
                label: "Home",
                url: "/",
            },
            {
                label: "Gallery",
                url: "/gallery",
            },
            {
                label: "Services",
                url: "/services",
            },
            {
                label: "About",
                url: "/about",
            },
            {
                label: "Contact Us",
                url: "/contact-us",
            },
        ]
    })
})

//hbs template engine
app.set("view engine", "hbs")
app.set("views", "views")//second arhuement is filepath of the views folder wrt to top level project folder


app.listen(port, () => {
    console.log("server is running on port", port);
});