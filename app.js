const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const planets = require("./routes/planets");

app.use(planets);

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
  var err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
      message: err.message,
      error: req.app.get("env") === "development"
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on, ${port}`);
});
