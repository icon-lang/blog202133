const mongoose = require("mongoose");

let Schema = mongoose.Schema;
let articleSchema = new Schema({
  type : {type: String,required: true},
  title : {type: String,required: true},
  content : {type:String,required: true},
  tag : {type: String,required: true},
  updateDate : {type: Date,default: Date.now},
  date : {type: Date, default: Date.now},
  surface : {type:String,default: 'http://localhost:3000/img/defaultSurface.jpg'},
  pv : {type: Number,default: 0},
  comment : [{type:Schema.Types.ObjectID,ref:"comment"}]
})

articleSchema.pre("update",function(next){
  this.update = new Date;
  next();
});

let article = mongoose.model("article",articleSchema);


module.exports = article;
