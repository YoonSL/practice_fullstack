const mongoose = require('mongoose');

/* --- PHASE 1 - WRITE THE INVENTORY MODEL --- */

// Save a reference to the Schema constructor
/* --- Code here --- */
var Schema = mongoose.Schema;
// Using the Schema constructor, create a new UserSchema object
/* --- Code here --- */
var ItemSchema = new Schema({
    itemName:{
        type: String,
        unique: true,
        required:"Item name is Required."
    },

    itemCount:{
        type:String,
        required: "Number of item is required."
    },
    itemID:{
        type:String,
        unique:true,
        required:"This item needs an ID to be verified."
    }
});
// This creates our model from the above schema, using Mongoose's model method
/* --- Code here --- */
var Inventory = mongoose.model("Inventory", ItemSchema);
// Export the Inventory model
module.exports = Inventory;
