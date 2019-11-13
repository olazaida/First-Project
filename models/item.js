const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const Items =  new Schema ({
    name: { type: String, required: true },
    time: { type: [String], required: true },
    rating: { type: Number, required: true },
    image :String,
    imgInfo:String,
    userName:{type:String, unique:true},
    userId:Number,
    userRelatedWorks:String,
    worksId:Number,
    views:Number,
    progilePicReviews:String,
    date:Date

},
{ timestamps: true }
)

const Item = mongoose.model("item", Items);
var s1 = new Item({
    image:"l",
    imgInfo:"something",
    userName:"hadil",
    userId:1111111,
    userRelatedWorks:"Something",
    worksId:33455,
    views:22222,
    progilePicReviews:"Something"

    

})
s1.save()

module.exports.Items=Items;
