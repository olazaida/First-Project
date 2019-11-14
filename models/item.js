const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const Items =  new Schema ({
    id:Number,
    name:  String ,
    time: String ,
    userName:String,
    userId:Number,
    userRelatedWorks:String,
    worksId:Number,
    views:Number,
    progilePicReviews:String,
    date:Date

});


const userinfo= new Schema({
    name : String,
    location : String
})


const Reviewers =  new Schema ({
    profilePic: String,
    time: String ,
    userName:String,
    comment:String
});
const img =  new Schema ({
   
    itemid:Number,
    url:String,
    imgInfo:String
});

const Item = mongoose.model("item", Items);
const Imgs = mongoose.model("img", img);
const rev = mongoose.model("reviewers", Reviewers);
const Userinfo = mongoose.model("userinfo", userinfo)

const img1 =  new Imgs ({

    itemid:1,
    url:"anuthing",
    imgInfo:"hhh"
});

const userinfo1 = new  Userinfo({
    name: "oladog",
    location : "Jordan"
})

const  reviewers1 = new  rev({
    profilePic: "mkjk",
    time: "ll",
    userName:"samar",
    comment:"nhnlk"
})

var savingToDb = new Item({
    image:"l",
    imgInfo:"ola",
    userName:"olathedog",
    userId:45445,
    userRelatedWorks:"Something",
    worksId:33455,
    views:33333,
    progilePicReviews:"Something"

    

});

// img1.save((error,result)=>{
// if(error){
//     console.log("img error",error
//     )
// }
// else{
// console.log("img done")
// }
// });


// savingToDb.save((error,result)=>{
// if(error){
//     console.log("err")
// }else{
//     console.log("data has been saved")
// };

// });

userinfo1.save((error,result)=>{
if(error){
    console.log("user error",error
    )
}
else{
console.log("user done")
}
});

// reviewers1.save((error,result)=>{
//     if(error){
//         console.log("revs error",error
//         )
//     }
//     else{
//     console.log("revs done")
//     }
//     });
    

module.exports.Items=Items;
module.exports.Imgs=Imgs;
module.exports.Userinfo=Userinfo;
module.exports.rev=rev;