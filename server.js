const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ etended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main "}));
app.set("view engine", "handlebars");

