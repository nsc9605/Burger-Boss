const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');


// Create all the routes and set up logic.
router.get("/", (req, res) => {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", (req, res) => {
    burger.insertOne(
      ["burger_name", "devoured"], 
      [req.body.burger_name, false], 
      (result) => {
        console.log("req.body.burger_name");
        // Send back the ID of the new burger
      res.json({ id: result.insertId });
      // res.status(200).end();
    });
  });
  
  router.put("/api/devoured/:id", (req, res) => {
    var condition = "id = " + req.params.id;
    // var col = "devoured = " + req.body.devoured;
    console.log("condition", condition);

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
    console.log("updated")
  
});

  // Export routes for server.js to use.
  module.exports = router;
  
    // burger.select(
    //   {
    //     devoured: req.body.devoured
    //   },
    //   condition,
    //   function(result) {
    //     if (result.changedRows === 0) {
    //       // If no rows were changed, then the ID must not exist, so 404
    //       return res.status(404).end();
    //     }
    //     res.status(200).end();
  
    //   }
    // );
 
