const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

// Create all the routes and set up logic.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var allBurgers = {
        burgers: data
      };
      console.log("index", allBurgers);
      res.render("index", allBurgers);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        console.log("req.body.burger_name, req.body.devoured");
        // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var burger_id = "id = " + req.params.id;
  
    console.log("burger_id", burger_id);

    burger.updateOne()
    console.log("updated")
  
    burger.selectAll(
      {
        devoured: req.body.devoured
      },
      id,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  