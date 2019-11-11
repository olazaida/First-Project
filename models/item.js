const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = Schema ({
    image :String,
    imgInfo:String,
    userName:String,
    userId:Number,
    userRelatedWorks:String,
    worksId:Number,
    views:Number,
    progilePicReviews:String,
    date:Date

})

const Item = mongoose.model("item", ItemSchema);
var s1 = new Item({
    image:"l",
    imgInfo:"oikjhuj",

    

})
s1.save()
module.exports.Item=Item;