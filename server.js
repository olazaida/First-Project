const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser");

const app = express();

//Config DB 

const URI = require ("./config/keys").mongoURI;
mongoose.connect(URI, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});
app.use(bodyParser.json());
const Item = require ("./models/item.js").Item;
app.get("/items" , (req,res) => {
Item.find({})
.sort({date:-1})
.then(items => res.json(items));
 })
//  app.post("items", (req,res)=> {
//      const newItem = Item({image : req.body.image})
//      newItem.save().then(item => res.json(item));
//  })
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('server started on port ' + port));


