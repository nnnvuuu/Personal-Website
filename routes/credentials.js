const router = require('express').Router();
let Credential = require('../models/credentials.model');
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
let auth = require('../middlewares/auth');
const JWT_SECRET = process.env.JWT_SECRET;

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    // Check for existing user
    const user = await Credential.findOne({ email });
    if (!user) throw Error('User does not exist');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error('Invalid credentials');

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: 10000 });
    if (!token) throw Error('Couldnt sign the token');

    res.status(200).json({
      token,
      user: {
        id: user._id,
        username: user.username, //wo zuo wan gai le 10/26
        email: user.email
      }
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.get('/user', auth, async (req, res) => {
  try {
    //i dont want password to show
    const user = await Credential.findById(req.user.id).select('-password'); 
    if (!user) throw Error('User does not exist');
    res.json(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});



router.post("/register", async(req,res)=> { 


  const { email, password, passwordCheck, username } = req.body;
  
  
    
  try {
    // Simple validation
    if (!email || !password || !username || !passwordCheck  ) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
  
    if(password.length < 6){
      return res.status(400).json({ msg: 'the password needs to be at least 6 character long' });
    }
  
  
    if(password != passwordCheck){
      return res.status(400).json({ msg: 'need to enter the same password twitch' });
    }
  
    if(username.length < 3){
      return res.status(400).json({ msg: 'the username needs to be at least 3 character long' });
    }
  
    if(username.length > 10){
      return res.status(400).json({ msg: 'the username needs to be at most 10 character long' });
    }
  
     // Check for existing user
     const existingUser = await Credential.findOne({ email:email });
     if (existingUser){
      return res.status(400).json({ msg: 'An account with this email address already exist'});
     }
  
      // Check for existing username
      const existingUsername = await Credential.findOne({ username:username });
      if (existingUsername){
       return res.status(400).json({ msg: 'the username has already been used'});
      }
  
  
     const salt = await bcrypt.genSalt(10);
      if (!salt) throw Error('Something went wrong with bcrypt');
  
      const hash = await bcrypt.hash(password, salt);
      if (!hash) throw Error('Something went wrong hashing the password');
  
      const newUser = new Credential({
        username,
        email,
        password: hash
      });
  
      const savedUser = await newUser.save();
      if (!savedUser) throw Error('Something went wrong saving the user');
  
      // const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
      //   expiresIn: 10000
      // });
  
      // res.status(200).json({
      //   token,
      //   user: {
      //     id: savedUser.id,
      //     username: savedUser.username,
      //     email: savedUser.email
      //   }
      // });
          // window.location.href = "http://localhost:3000/SignUp";
  
    } catch (e) {
      
      res.status(400).json({ error: e.message });
    }
     
  })
  
  // Regular GET request returns all users
  router.route('/').get((req, res) => {
    Credential.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  


 
  
  module.exports = router;