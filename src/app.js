const express = require("express");
const hbs = require("hbs");
const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");
const Details = require("./models/Details");
const Slides = require("./models/Slides");
const Projects = require("./models/Projects");
const app = express();
const routes = require("./routes/main");
//require("dotenv").config();
const port = process.env.PORT || 3500;

// partials(ie. reusable components like navbar) declaration
hbs.registerPartials("views/partials")

//db connection
mongoose.connect("mongodb://localhost/node-mongo-website", () => {
    console.log("db connected");
    // Details.create({
    //     brandName: "Cool Site",
    //     brandIconUrl: "http://www.w3schools.com/css/img_mountains.jpg",
    //     links: [
    //         {
    //             label: "Home",
    //             url: "/",
    //         },
    //         {
    //             label: "Gallery",
    //             url: "/gallery",
    //         },
    //         {
    //             label: "Services",
    //             url: "/services",
    //         },
    //         {
    //             label: "About",
    //             url: "/about",
    //         },
    //         {
    //             label: "Contact Us",
    //             url: "/contact-us",
    //         },
    //     ]
    // })
    // Slides.create([
    //     {
    //         title: "Software",
    //         subtitle: "code in an IDE",
    //         imageUrl: "/static/images/bg-slider-1.jpg"
    //     },
    //     {
    //         title: "Components",
    //         subtitle: "Hardware components of a smartphone",
    //         imageUrl: "/static/images/bg-slider-2.jpg"
    //     },
    //     {
    //         title: "Console",
    //         subtitle: "Pilot's console on an airplane",
    //         imageUrl: "/static/images/bg-slider-3.jpg"
    //     },
    //     {
    //         title: "System",
    //         subtitle: "Compact tower watercooled PC",
    //         imageUrl: "/static/images/bg-slider-4.jpg"
    //     },
    // ])
    // Projects.create([
    //     {
    //         icon: "fas fa-users-cog",
    //         title: "User Access Review portal",
    //         description: "Web app to facilitate user access review for an organisation",
    //         exploreLink: "#!",
    //         infoLink: "#!"
    //     },
    //     {
    //         icon: "fas fa-bolt",
    //         title: "Quizzap",
    //         description: "Fullstack web app to server users with various quizzes. Also allows admin an interface to create quizzes",
    //         exploreLink: "#!",
    //         infoLink: "#!"
    //     },
    //     {
    //         icon: "fas fa-chart-area",
    //         title: "Moneypenny",
    //         description: "Your personal secretary to the stock market",
    //         exploreLink: "#!",
    //         infoLink: "#!"
    //     },
    // ])
})

//hbs template engine
app.set("view engine", "hbs")
app.set("views", "views")//second arhuement is filepath of the views folder wrt to top level project folder

// access all files in public folder using static path eg. /static/css/styles.css
app.use("/static", express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use("", routes);

app.listen(port, () => {
    console.log("server is running on port", port);
});