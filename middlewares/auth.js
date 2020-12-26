
var jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

function auth(req,res,next){


  const token = req.header('x-auth-token');
    // console.log('token is:'+ token);
  

  //check for token
  if(!token)  return res.status(401).json({msg: 'No token, authorization denied'});

  try{
  //verrify token
  const decoded = jwt.verify(token,JWT_SECRET);
  console.log('w'); 
  console.log(decoded); 
  //add user from payload
  req.user = decoded;
  next();
  
  }
  catch(e){
  res.status(400).json({msg: "token is not vaild"});
  }

}
module.exports = auth;