const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

// Create all the routes and set up logic.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burger", function(req, res) {
    burger.insertOne(["name", "burger"], [req.body.name, req.body.burger_name], function(result) {
        console.log("req.body.name, req.body.burger_name");
        // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);

    burger.updateOne({ 
      burger: req.body.burger_name
    }, condition, function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      // } else {
      //   res.status(200).end();
      // }
    }
    console.log("updated")
  });
});
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
 
  
  // Export routes for server.js to use.
  module.exports = router;
  