"use strict";

var express = require('express');
var mongoose = require("mongoose");
var dotenv = require('dotenv');
var categorieRouter = require("./routes/categorie.route");
var scategorieRouter = require("./routes/scategorie.route");
dotenv.config();
var app = express();
//BodyParser Middleware
app.use(express.json());
//image upload
app.use('/public', express["static"]('public'));
mongoose.set("strictQuery", false);
// Connexion à la base données
mongoose.connect(process.env.DATABASECLOUD, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("Connexion à la base de données réussie");
})["catch"](function (err) {
  console.log('Impossible de se connecter à la base de données', err);
  process.exit();
});
app.get("/", function (req, res) {
  res.send("bonjour");
});
app.get("/contact", function (req, res) {
  res.send("page de contact11");
});
app.use('/api/categories', categorieRouter);
app.use('/api/scategories', scategorieRouter);
app.listen(process.env.PORT, function () {
  console.log("Server is listening on port ".concat(process.env.PORT));
});
