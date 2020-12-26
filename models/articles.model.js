const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articlesSchema = new Schema({
   title:{
       type:String,
       required:true
   },
   tag:{
    type:String,
    required:true
  },
   markdown:{
     type:String,
     required:true
   },
  //  subTag:{
  //     type:String,
  //     required:true
  //  },
  subTag:[{
   type: String,
   required:true,
  }
  ],
   date:{
       type:Date,
       required:true
   }
 
 },
   {
     timestamps:true,
   }
); 

const Article = mongoose.model('Article',articlesSchema);
module.exports = Article;