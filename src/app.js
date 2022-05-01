const express = require("express");
const app = express();
const routes = require("./routes/main");
//require("dotenv").config();
const port = process.env.PORT || 3500;

//app.use(bodyParser.json());
app.use("", routes);


app.listen(port, () => {
    console.log("server is running on port", port);
});