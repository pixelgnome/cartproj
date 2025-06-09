const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
//Import database
const sequelize = require("./util/database");
const port = 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
