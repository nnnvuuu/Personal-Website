const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const credentialSchema = new Schema({
  email:{
    type:String,
    required:true
  },
   username:{
    type:String,
    required:true
   },
   password:{
    type:String,
    minlength:6,  
    required:true
   },

 },
   {
     timestamps:true,
   }
); 

const credential = mongoose.model('credential',credentialSchema);
module.exports = credential;