var express = require("express");
const queries = require("../db/queries");
const bodyParser = require('body-parser')

var router = express.Router();


router.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
router.use(bodyParser.json())


function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error("Invalid ID"));
}

function validPlanet(planet) {
  const hasName = typeof planet.name == "string" && planet.name.trim() != "";
  const hasFact = typeof planet.fact == "string" && planet.fact.trim() != "";
  const hasDescription = typeof planet.description == "string" && planet.description.trim() != "";

  return hasName && hasFact && hasDescription;
}

router.get("/planets", function(request, response, next) {
  queries.getAll()
    .then(function(planets) {
      response.json(planets);
    });
});

router.get("/planets/:id", isValidId, function(request, response, next) {
  queries.getPlanet(request.params.id)
    .then(function(planets) {
      if (planets) {
        response.json(planets);
      } else {
        next();
      }
    });

});

router.get("/planets/:id/gravity", function(request, response, next) {
  var id = request.params.id;
  // _name = _name.charAt(0).toUpperCase() + _name.slice(1);
  queries.getGravity(id)
    .then(function(planets) {
      response.json(planets);
    });
});

// router.get("/planets/:_name", function(request, response, next) {
//   var _name = request.params._name;
//   _name = _name.charAt(0).toUpperCase() + _name.slice(1);
//   console.log("_name ", _name);
//   queries.getPlanetByName(_name)
//     .then(function(planets) {
//       response.json(planets);
//     });
// });

router.get("/planets/:id/fact", function(request, response, next) {
  //var _name = request.params._name;
  //_name = _name.charAt(0).toUpperCase() + _name.slice(1);
  var id = request.params.id;
  queries.getFact(id)
    .then(function(planets) {
      response.json(planets);
    });
});

router.post("/planets", (req, res, next) => {
  if (validPlanet(req.body)) {
    queries.create(req.body).then(planets => {
      res.json(planets[0]);
    });
  } else {
    next(new Error("Invalid planet"));
  }
});

router.put("/planets/:id", isValidId, (req, res, next) => {
  if (validPlanet(req.body)) {
    queries.update(req.params.id, req.body).then(planets => {
      res.json(planets[0]);
    });
  } else {
    next(new Error("Invalid planet"));
  }
});

router.delete("/planets/:id", isValidId, (req, res, next) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      deleted: true
    });
  });

});

module.exports = router;
