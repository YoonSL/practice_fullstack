// Require all models
const db = require('../models');

// module.exports exports this function so it can be required by another file (in this case, server.js)
// Must pass in app because it contains the Express application
module.exports = function (app) {

    /* --- PHASE 2 - WRITE THE ROUTES --- */

    // Route for retrieving all Inventory from the database via a GET request
    app.get("/api/inventory",function(req,res){
        //finds the inventory with find function
        db.Inventory.find({})
            .then(function(dbInventory){
                res.json(dbInventory);
            })
            .catch(function(err){
                res.json(err);
            });
    });
    // Route for saving a new Inventory entry to the database via a POST request
    app.post("/api/inventory",function(req,res){
        console.log(req.body);
        db.Inventory.create(req.body)
       
        .then(function(dbInventory){
            res.json(dbInventory);
        })
        .catch(function(err){
            res.json(err);
        });
    });
    // Route for saving updates to inventory via a PUT request
    app.put("/api/inventory",function(req,res){
        db.Inventory.findOneAndUpdate({itemID:req.body.itemID},{$set: {itemCount:req.body.itemCount}})
        .then(function(dbInventory){
            res.json(dbInventory);
        })
        .catch(function(err){
            res.json(err);
        });
    });

};