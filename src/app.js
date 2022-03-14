const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.port || 8002;

const webpath = path.join(__dirname, "../public");
const tem_path = path.join(__dirname, "../template/views");
const partials_path = path.join(__dirname, "../template/partials");

app.set("view engine", "hbs");
app.set("views", tem_path);
hbs.registerPartials(partials_path);

app.use(express.static(webpath));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404", {
    Errormsg: "Opps Page Could Not Found! Go back🔄",
  });
});

app.listen(port, () => {
  console.log(`Listing port number ${port}`);
});
