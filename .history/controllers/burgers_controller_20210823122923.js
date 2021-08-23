const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');


// Create all the routes and set up logic.
router.get("/", (req, res) => {
    burger.selectAll((data) => {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", (req, res) => {
    burger.insertOne(
      "burger_name", 
      [req.body.burger_name], 
      (result) => {
        // Send back the ID of the new burger
      res.json({ id: result.insertId });
      res.status(200).end();
    });
  });
  
  router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;
  // Set to return with 404 error if nothing has changed
    burger.updateOne(
      { devoured: req.body.devoured }, 
      condition, 
      (result) => { 
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  
});

  // Export routes for server.js to use.
  module.exports = router;
  
 
