# Phase 2: Inventory App Routes

* Next you need to write the following into the api-routes.js file:

    * A GET route to `/api/inventory` that will find everything from the Mongo database and return it to the client using `res.json`

    * A POST route to `/api/inventory` that will create a new document in the inventory Mongo collection from whatever is given by the client and return the response to the client using `res.json`

    * A PUT route to `/api/inventory` that will update an existing document by its `itemID` field and set the value of `itemCount` to the incoming itemCount. Then return whatever the response is using `res.json`