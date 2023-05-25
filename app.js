const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const shopRoutes = require("./routes/shop");
const admin = require("./routes/admin");

app.use(shopRoutes);

app.use(admin);

app.listen(3000);
